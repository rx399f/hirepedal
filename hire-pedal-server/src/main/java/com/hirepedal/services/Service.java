package com.hirepedal.services;

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
import com.hirepedal.model.Address;
import com.hirepedal.model.Cart;
import com.hirepedal.model.Category;
import com.hirepedal.model.Customer;
import com.hirepedal.model.GPSTrack;
import com.hirepedal.model.Image;
import com.hirepedal.model.Item;
import com.hirepedal.model.Order;
import com.hirepedal.model.Partner;

public interface Service {

	ItemCommonResponse addItem(Item item);

	CommonBaseResponse loginPartner(Partner partner);

	CommonBaseResponse getAllPartners();

	CommonBaseResponse registerPartner(PartnerAddress partner);

	//Customer
	CommonBaseResponse loginCustomer(Customer customer);

	CommonBaseResponse getAllCustomers();

	CommonBaseResponse registerCustomer(Customer customer);

	CommonBaseResponse saveAddress(Address address);

	NearByBaseResponse nearBy(double plat, double plong, double distance);

	ItemCommonResponse getItemsByPartnerId(String itemCommonResponse);

	Image saveProfileLogoImage(ImageRequest images);

	String saveImage(ImageRequest images);

	CommonBaseResponse getPartnerIds(String partnerId);

	CategoryBaseResponse getCategories();

	CategoryBaseResponse addCategories(Category category);

	GpsBaseResponse addLocation(GPSTrack track);

	CartItemsBaseResponse addToCart(CartItems cartItems);

	BaseResponse sendConversationDetails(String name, String email_address, String phone, String message);

	OrderBaseResponse addOrder(Order order);

	OrdersBaseResponse searchOrder(Order order);

	CartsItemsBaseResponse searchCartDetails(Cart cart);

	GpsBaseResponse getLocations(String deviceId, int limit);

}