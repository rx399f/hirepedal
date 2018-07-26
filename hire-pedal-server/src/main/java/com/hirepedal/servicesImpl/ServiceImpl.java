package com.hirepedal.servicesImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;

import javax.imageio.ImageIO;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.stereotype.Repository;

import com.hirepedal.contracts.AddressRequest;
import com.hirepedal.contracts.BaseResponse;
import com.hirepedal.contracts.CartItems;
import com.hirepedal.contracts.CartItemsBaseResponse;
import com.hirepedal.contracts.CartsItemsBaseResponse;
import com.hirepedal.contracts.CategoryBaseResponse;
import com.hirepedal.contracts.CommonBaseResponse;
import com.hirepedal.contracts.GpsBaseResponse;
import com.hirepedal.contracts.ImageRequest;
import com.hirepedal.contracts.ItemCommonResponse;
import com.hirepedal.contracts.NearByBaseResponse;
import com.hirepedal.contracts.OrderBaseResponse;
import com.hirepedal.contracts.OrdersBaseResponse;
import com.hirepedal.contracts.PartnerAddress;
import com.hirepedal.contracts.PartnerItemDetails;
import com.hirepedal.dao.CartDao;
import com.hirepedal.dao.CustomerDao;
import com.hirepedal.dao.GpsTrackDao;
import com.hirepedal.dao.ImageDao;
import com.hirepedal.dao.ItemDao;
import com.hirepedal.dao.ItemScheduledDao;
import com.hirepedal.dao.OrderDao;
import com.hirepedal.dao.PartnerDao;
import com.hirepedal.enumData.AddressRefType;
import com.hirepedal.enumData.ItemScheduledStatus;
import com.hirepedal.model.Address;
import com.hirepedal.model.Cart;
import com.hirepedal.model.Category;
import com.hirepedal.model.Customer;
import com.hirepedal.model.GPSTrack;
import com.hirepedal.model.Image;
import com.hirepedal.model.Item;
import com.hirepedal.model.ItemScheduled;
import com.hirepedal.model.Items;
import com.hirepedal.model.Order;
import com.hirepedal.model.Partner;
import com.hirepedal.services.Service;
import com.hirepedal.util.CONSTANT;
import com.hirepedal.util.EmailUtil;

@Repository
public class ServiceImpl implements Service {

	@Autowired
	private ItemDao itemDao;
	
	@Autowired
	private PartnerDao partnerDao;
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private ImageDao imageDao;
	
	@Autowired
	private ItemScheduledDao itemScheduledDao;
	
	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private GpsTrackDao gpsTrackDao;
	
	Mapper mapper = new DozerBeanMapper();
	
	@Override
	public ItemCommonResponse addItem(Item item) {
		ItemCommonResponse response = new ItemCommonResponse(); 
		Item itemRes = itemDao.addItem(item);
		List<Item> itemList = new ArrayList<>();
		if(itemRes != null){
			itemList.add(itemRes);
			response.setStatus(CONSTANT.SUCCESS);
			response.setStatusCode(CONSTANT.SUCCESS_CODE);
			response.setItems(itemList);
		}else{
			response.setStatus(CONSTANT.SUCCESS);
			response.setStatusCode(CONSTANT.SUCCESS_CODE);
			response.setMessage(CONSTANT.DATA_PERSISTENT_ERROR);
			response.setItems(null);
		}
		return response;
	}

	@Override
	public CommonBaseResponse loginPartner(Partner partner) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		Partner partners = partnerDao.loginPartner(partner);
		List<Partner> partnersList = new ArrayList<>();
		if(partners != null){
			partnersList.add(partners);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(partnersList);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setMessage(CONSTANT.LOGIN_FAILED_MESSAGE);
			commonBaseResponse.setPartners(null);
		}
		return commonBaseResponse;
	}

	@Override
	public CommonBaseResponse getAllPartners() {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		List<Partner> partners = partnerDao.getAllPartners();
		if(partners != null && !partners.isEmpty()){
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(partners);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(new ArrayList<>());
		}
		return commonBaseResponse;
	}

	@Override
	public CommonBaseResponse registerPartner(PartnerAddress partnerAddress) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		Partner partner = new Partner();
		mapper.map(partnerAddress, partner);
		Partner partnerRes = partnerDao.findbyEmail(partner.getEmail());
		//List<Partner> partnersList = new ArrayList<>();
		PartnerAddress partAddress = new PartnerAddress();
		Partner part = null;
		Address address = null;
		AddressRequest addressRequest = null;
		if(partnerRes == null){
			part = partnerDao.savePartner(partner);
			if(part != null && partnerAddress.getAddress() != null){
				addressRequest = partnerAddress.getAddress();
				address = new Address();
				mapper.map(addressRequest, address);
				address.setLocation(new GeoJsonPoint(
				        Double.valueOf(addressRequest.getPlong()),
				        Double.valueOf(addressRequest.getPlat())));
				address.setRefType(CONSTANT.PARTNER);
				address.setRefId(part.getPartnerId());
				customerDao.saveAddress(address);
			}
		}else{
			commonBaseResponse.setStatus(CONSTANT.FAIL);
			commonBaseResponse.setStatusCode(CONSTANT.FAIL_CODE);
			commonBaseResponse.setMessage(CONSTANT.USER_ALREADY_EXISTS);
			commonBaseResponse.setPartner(null);
		}
		if(part != null){
			//partnersList.add(part);
			mapper.map(part, partAddress);
			if(address != null) partAddress.setAddress(partAddress.getAddress());
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartner(partnerAddress);
			EmailUtil.sendMail(part.getEmail(), EmailUtil.getConfigProperty(CONSTANT.CC_EMAIL), 
					CONSTANT.PARTNER_REGISTRATION_SUBJECT, EmailUtil.getPartnerRegisteration(part.getFirstName(), part.getEmail()), null);
		}
		return commonBaseResponse;
	}

	@Override
	public CommonBaseResponse loginCustomer(Customer customer) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		Customer customers = customerDao.loginCustomer(customer);
		List<Customer> customersList = new ArrayList<>();
		if(customers != null){
			customersList.add(customers);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setCustomers(customersList);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setMessage(CONSTANT.LOGIN_FAILED_MESSAGE);
			commonBaseResponse.setPartners(null);
		}
		return commonBaseResponse;
	}

	@Override
	public CommonBaseResponse getAllCustomers() {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		List<Customer> customers = customerDao.getAllCustomers();
		if(customers != null && !customers.isEmpty()){
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setCustomers(customers);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(new ArrayList<>());
		}
		return commonBaseResponse;
	}

	@Override
	public CommonBaseResponse registerCustomer(Customer customer) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		Customer customerRes = customerDao.findbyEmail(customer.getEmail());
		List<Customer> customerList = new ArrayList<>();
		Customer cust = null;
		if(customerRes == null){
			cust = customerDao.saveCustomer(customer);
		}else{
			commonBaseResponse.setStatus(CONSTANT.FAIL);
			commonBaseResponse.setStatusCode(CONSTANT.FAIL_CODE);
			commonBaseResponse.setMessage(CONSTANT.USER_ALREADY_EXISTS);
			commonBaseResponse.setPartners(null);
		}
		if(cust != null){
			customerList.add(cust);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setCustomers(customerList);
			EmailUtil.sendMail(cust.getEmail(), EmailUtil.getConfigProperty(CONSTANT.CC_EMAIL), 
					CONSTANT.CUSTOMER_REGISTRATION_SUBJECT, EmailUtil.getCustomerRegisteration(cust.getFirstName(), cust.getEmail()), null);
		}
		return commonBaseResponse;

	}

	@Override
	public CommonBaseResponse saveAddress(Address address) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		Address addressRes = customerDao.saveAddress(address);
		List<Address> addressList = new ArrayList<>();
		if(addressRes != null){
			addressList.add(addressRes);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setAddressess(addressList);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setAddressess(null);
			commonBaseResponse.setMessage(CONSTANT.DATA_PERSISTENT_ERROR);
		}
		return commonBaseResponse;
	}

	@Override
	public NearByBaseResponse nearBy(double plat, double plong, double distance) {
		NearByBaseResponse commonBaseResponse = new NearByBaseResponse();
		PartnerItemDetails partnerItemDetails = null;
		List<PartnerItemDetails> nearBy = new ArrayList<>();
		List<Address> listOfAddresss = partnerDao.getNearByPartners(plat, plong, distance);
		if(listOfAddresss != null && !listOfAddresss.isEmpty()){
			System.out.println("listOfAddresss : " + listOfAddresss);
			for (Address address : listOfAddresss) {
				partnerItemDetails = new PartnerItemDetails();
				System.out.println(AddressRefType.PARTNER);
				if(CONSTANT.PARTNER.equals(address.getRefType())){
					Partner partner = partnerDao.getPartnerIds(address.getRefId());
					if(partner != null){
						partnerItemDetails.setPartner(partner);
						partnerItemDetails.setAddress(address);
						Set<Item> items = getAvailableItem(partner.getPartnerId());
						partnerItemDetails.setItems(items != null ? items : new HashSet<>());
						nearBy.add(partnerItemDetails);
					}
				}
				
			}
			commonBaseResponse.setNearBy(nearBy);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
		}else{
			commonBaseResponse.setStatus(CONSTANT.FAIL);
			commonBaseResponse.setStatusCode(CONSTANT.FAIL_CODE);
		}
		return commonBaseResponse;
	}

	private Set<Item> getAvailableItem(String partnerId) {
		Item request = new Item();
		request.setPartnerId(partnerId);
		Set<Item> itemsAvailable = new HashSet<Item>();
		List<Item> items = itemDao.getItem(request);
		if(items != null && !items.isEmpty()){
			for (Item item : items) {
				if(isAvailableItemScheduled(item.getItemId())){
					itemsAvailable.add(item);
				}
			}
		}
		return itemsAvailable;
	}

	private boolean isAvailableItemScheduled(String itemId) {
		List<ItemScheduled> itemsScheduled = itemScheduledDao.getAvailableItem(itemId);
		if(itemsScheduled != null && !itemsScheduled.isEmpty()){
			if(itemsScheduled.size() > 0 ){
				return false;
			}else{
				return true;
			}
		}
		return true;
	}

	@Override
	public ItemCommonResponse getItemsByPartnerId(String partnerId) {
		ItemCommonResponse response = new ItemCommonResponse();
		List<Item> items = partnerDao.getItemsByPartnerId(partnerId);
		if(items !=null && !items.isEmpty()){
			response.setStatus(CONSTANT.SUCCESS);
			response.setStatusCode(CONSTANT.SUCCESS_CODE);
			response.setItems(items);
		}else{
			response.setStatus(CONSTANT.SUCCESS);
			response.setStatusCode(CONSTANT.SUCCESS_CODE);
			response.setItems(new ArrayList<>());
		}
		return response;
	}

	@Override
	public Image saveProfileLogoImage(ImageRequest profileLogo) {

		String uploadImagePath = CONSTANT.UPLOAD_LOCATION_SERVER;
		Image image = null;
		String profileLogoImageDirectoryPath = "HP" + "//" + "HP_Image_Logo" + "//" + profileLogo.getImageId();
		String profileLogoImageName = profileLogoImageDirectoryPath + "//" + profileLogo.getImageId()
				+ CONSTANT.UNDERSCORE + genrateRandomValue() + CONSTANT.DOT + CONSTANT.EXTENSION;
		try {
			File newProfileLogoImage = new File(uploadImagePath + "//" + profileLogoImageName);
			File profileLogoImageDirectory = new File(uploadImagePath + "//" + profileLogoImageDirectoryPath);
			if (profileLogoImageDirectory.exists()) {
				for (File file : profileLogoImageDirectory.listFiles()) {
					file.delete();
				}
			}
			newProfileLogoImage.getParentFile().mkdirs();
			newProfileLogoImage.createNewFile();
			ByteArrayInputStream bis = new ByteArrayInputStream(profileLogo.getImage().getBytes());
			final BufferedImage bufferedImage = ImageIO.read(bis);
			ImageIO.write(bufferedImage, CONSTANT.EXTENSION, newProfileLogoImage);
			image = imageDao.updateProfile(profileLogoImageName, profileLogo.getImageId());
		} catch (Exception x) {
			x.printStackTrace();
		}
		return image;
	}

	public static String genrateRandomValue() {
		final String ALFANUM = "0123456789ABCDEFGHIJKLMNOP";
		final Integer size = 4;
		StringBuilder sb = new StringBuilder(size);
		for (int i = 0; i < size; i++) {
			int ndx = (int) (Math.random() * ALFANUM.length());
			sb.append(ALFANUM.charAt(ndx));
		}
		return sb.toString();
	}

	@Override
	public String saveImage(ImageRequest images) {
		Image image = new Image();
		mapper.map(images, image);
		return imageDao.saveImage(image);
	}

	@Override
	public CommonBaseResponse getPartnerIds(String partnerId) {
		CommonBaseResponse commonBaseResponse = new CommonBaseResponse();
		List<Partner> partners = new ArrayList<>();
		Partner partner = partnerDao.getPartnerIds(partnerId);
		if(partner != null){
			partners.add(partner);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(partners);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setPartners(new ArrayList<>());
		}
		return commonBaseResponse;
	}

	@Override
	public CategoryBaseResponse getCategories() {
		CategoryBaseResponse categoryBaseResponse = new CategoryBaseResponse();
		List<Category> categories = new ArrayList<>();
		categories = partnerDao.getCategories();
		if(categories != null){
			categoryBaseResponse.setStatus(CONSTANT.SUCCESS);
			categoryBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			categoryBaseResponse.setCategories(categories);
		}else{
			categoryBaseResponse.setStatus(CONSTANT.SUCCESS);
			categoryBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			categoryBaseResponse.setCategories(categories);
		}
		return categoryBaseResponse;
	}

	@Override
	public CategoryBaseResponse addCategories(Category category) {
		CategoryBaseResponse commonBaseResponse = new CategoryBaseResponse();
		Category categoryPersistent = partnerDao.saveCategory(category);
		List<Category> catergories = new ArrayList<>();
		if(categoryPersistent != null){
			catergories.add(categoryPersistent);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setCategories(catergories);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setCategories(catergories);
			commonBaseResponse.setMessage(CONSTANT.DATA_PERSISTENT_ERROR);
		}
		return commonBaseResponse;
	}

	@Override
	public GpsBaseResponse addLocation(GPSTrack track) {
		GpsBaseResponse commonBaseResponse = new GpsBaseResponse();
		track.setTime(new Date());
		GPSTrack tracks = partnerDao.addLocation(track);
		List<GPSTrack> tracksAdded = new ArrayList<>();
		if(tracks != null){
			tracksAdded.add(tracks);
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setLocations(tracksAdded);
		}else{
			commonBaseResponse.setStatus(CONSTANT.SUCCESS);
			commonBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			commonBaseResponse.setLocations(tracksAdded);
			commonBaseResponse.setMessage(CONSTANT.DATA_PERSISTENT_ERROR);
		}
		return commonBaseResponse;
	}

	@Override
	public CartItemsBaseResponse addToCart(CartItems cartItems) {
		CartItemsBaseResponse cartItemsBaseResponse = new CartItemsBaseResponse();
		List<Items> cartItemsResponse = new ArrayList<>();
		Items itemsPersisted = null;
		if(cartItems != null){
			if(cartItems.getCart() != null && cartItems.getCart().getCartId() == null){
				//Save Cart and Items
				Cart cartPersist = cartDao.addToCart(cartItems.getCart());
				if(cartPersist != null && cartItems.getItems() != null && !cartItems.getItems().isEmpty()){
					//Add Items
					cartItemsBaseResponse.setCart(cartPersist);
					for (Items cartItem : cartItems.getItems()) {
						cartItem.setCartId(cartPersist.getCartId());
						itemsPersisted = cartDao.addCartItems(cartItem);
						if(itemsPersisted != null) {
							cartItemsResponse.add(itemsPersisted);
							//Blocking the itemm
								ItemScheduled itemScheduled = new ItemScheduled();
								itemScheduled.setStatus(ItemScheduledStatus.BLOCKED);
								itemScheduled.setItemId(itemsPersisted.getItemId());
								itemScheduled.setBookingStartDate(cartPersist.getBookingStartDate());
								itemScheduled.setBookingEndDate(cartPersist.getBookingEndDate());
								itemScheduled.setAddedOn(new Date());
								itemScheduledDao.addItemScheduled(itemScheduled);
							}
						}
					}
					cartItemsBaseResponse.setItems(cartItemsResponse);
					
				}
			}else if(cartItems.getCart() != null && cartItems.getCart().getCartId() != null){
				//Update Cart and Items
				Cart cartPersist = cartDao.updateCartDetails(cartItems.getCart());
				if(cartPersist != null) cartItemsBaseResponse.setCart(cartPersist);
				if(cartItems.getItems() != null && !cartItems.getItems().isEmpty()){
					for (Items updateItem : cartItems.getItems()) {
						if(updateItem.getCartItemId() != null){
							//update cartItem
							Items cartItemUpdated = cartDao.updateCartItems(updateItem);
							if(cartItemUpdated != null) cartItemsResponse.add(cartItemUpdated);
						}else{
							//Save cartItem
							Items cartItemUpdated = cartDao.addCartItems(updateItem);
							if(cartItemUpdated != null) cartItemsResponse.add(cartItemUpdated);
						}
					}
				}
				cartItemsBaseResponse.setItems(cartItemsResponse);
			}else{
			cartItemsBaseResponse.setStatus(CONSTANT.FAIL);
			cartItemsBaseResponse.setStatusCode(CONSTANT.DATA_PERSISTENT_ERROR);
			cartItemsBaseResponse.setMessage(CONSTANT.NULL_REQUEST);
		}
		return cartItemsBaseResponse;
	}

	@Override
	public BaseResponse sendConversationDetails(String name, String email_address, String phone, String message) {
		BaseResponse baseResponse = new BaseResponse();
		String subject="HirePedal Enquiry\n\n";
		String content="Hi Hirepedal team, \n\nEnquiry received from the below contact.\n"
		+"Name				:	"+name+"\n"
		+"Email Address		:	"+email_address+"\n"
		+"Phone Number		:	"+phone+"\n"
		+"Message 			:	"+message+"\n"
		+"";
		String bcc = EmailUtil.getConfigProperty("mail.conversation.bcc");
		String cc = EmailUtil.getConfigProperty("mail.conversation.cc");
		String to = EmailUtil.getConfigProperty("mail.conversation.to");
		EmailUtil.sendMail(to, cc, subject, content, bcc);
		baseResponse.setStatus(CONSTANT.SUCCESS);
		return baseResponse;
	}

	@Override
	public OrderBaseResponse addOrder(Order order) {
		OrderBaseResponse orderBaseResponse = new OrderBaseResponse();
		if(order != null){
			Order orderPersisted = orderDao.addOrder(order);
			if(orderPersisted != null) {
				orderBaseResponse.setOrder(orderPersisted);
				orderBaseResponse.setStatus(CONSTANT.SUCCESS);
				orderBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			}
		}else{
			orderBaseResponse.setStatus(CONSTANT.FAIL);
			orderBaseResponse.setStatusCode(CONSTANT.FAIL_CODE);
			orderBaseResponse.setMessage(CONSTANT.DATA_PERSISTENT_ERROR);
		}
		return orderBaseResponse;
	}

	@Override
	public OrdersBaseResponse searchOrder(Order order) {
		OrdersBaseResponse ordersBaseResponse = new OrdersBaseResponse();
		List<Order> orders = new ArrayList<>();
		if(order != null){
			orders = orderDao.searchOrder(order);
			ordersBaseResponse.setStatus(CONSTANT.SUCCESS);
			ordersBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			ordersBaseResponse.setOrders(orders);
		}else{
			ordersBaseResponse.setStatus(CONSTANT.SUCCESS);
			ordersBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			ordersBaseResponse.setOrders(orders);
			ordersBaseResponse.setMessage(CONSTANT.RECORD_NOT_FOUND);
		}
		return ordersBaseResponse;
	}

	@Override
	public CartsItemsBaseResponse searchCartDetails(Cart cart) {
		CartsItemsBaseResponse cartsItemsBaseResponse = new CartsItemsBaseResponse();
		List<CartItems> cartItems = new ArrayList<>();
		CartItems cartItem = null;
		if(cart != null){
			List<Cart> listOfCarts = cartDao.searchCart(cart);
			for (Cart cart2 : listOfCarts) {
				cartItem = new CartItems();
				cartItem.setCart(cart2);
				List<Items> items = cartDao.findItemsByCartId(cart2.getCartId());
				if(items != null) cartItem.setItems(items);
				cartItems.add(cartItem);
			}
			cartsItemsBaseResponse.setCartItems(cartItems);
		}else{
			cartsItemsBaseResponse.setStatus(CONSTANT.SUCCESS);
			cartsItemsBaseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
			cartsItemsBaseResponse.setMessage(CONSTANT.RECORD_NOT_FOUND);
		}
		return cartsItemsBaseResponse;
	}

	@Override
	public GpsBaseResponse getLocations(String deviceId, int limit) {
		GpsBaseResponse baseResponse = new GpsBaseResponse();
		List<GPSTrack> locations = gpsTrackDao.getLocations(deviceId, limit);
		if(locations != null){
			baseResponse.setLocations(locations);
			baseResponse.setStatus(CONSTANT.SUCCESS);
			baseResponse.setStatusCode(CONSTANT.SUCCESS_CODE);
		}else{
			baseResponse.setLocations(locations);
			baseResponse.setStatus(CONSTANT.FAIL);
			baseResponse.setStatusCode(CONSTANT.FAIL_CODE);
		}
		return baseResponse;
	}

}
