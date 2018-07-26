package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.CartDao;
import com.hirepedal.model.Cart;
import com.hirepedal.model.Image;
import com.hirepedal.model.Items;

@Repository
public class CartDaoImpl implements CartDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public Cart addToCart(Cart cart) {
		mongoTemplate.save(cart);
		return cart;
	}

	@Override
	public Items addCartItems(Items cartItem) {
		mongoTemplate.save(cartItem);
		return cartItem;
	}

	@Override
	public Cart updateCartDetails(Cart cart) {

		Query query = new Query();
		query.addCriteria(Criteria.where("cartId").is(cart.getCartId()));
		Update update = new Update();
		if (new Double(cart.getTotalAmount()) != null)
			update.set("totalAmount", cart.getTotalAmount());
		if (new Double(cart.getNumberOfUnits()) != null)
			update.set("numberOfUnits", cart.getNumberOfUnits());
		if (cart.getCreatedOn() != null)
			update.set("createdOn", cart.getCreatedOn());
		if (cart.getCustomerId() != null)
			update.set("customerId", cart.getCustomerId());
		if (cart.getDropAddress() != null)
			update.set("dropAddress", cart.getDropAddress());
		if (cart.getPickupAddress() != null)
			update.set("pickupAddress", cart.getPickupAddress());

		mongoTemplate.updateFirst(query, update, Image.class);

		Query query1 = new Query();
		query1.addCriteria(Criteria.where("cartId").is(cart.getCartId()));
		Cart cartUpdated = mongoTemplate.findOne(query1, Cart.class);
		return cartUpdated;

	}

	@Override
	public Items updateCartItems(Items updateItem) {
		Query query = new Query();
		query.addCriteria(Criteria.where("cartItemId").is(updateItem.getCartItemId()));
		Update update = new Update();
		
		if (updateItem.getItemId() != null)
			update.set("itemId", updateItem.getItemId());
		if (updateItem.getCartId() != null)
			update.set("cartId", updateItem.getCartId());
		if (updateItem.getAddedOn() != null)
			update.set("addedOn", updateItem.getAddedOn());

		mongoTemplate.updateFirst(query, update, Image.class);

		Query query1 = new Query();
		query1.addCriteria(Criteria.where("cartId").is(updateItem.getCartItemId()));
		Items cartUpdated = mongoTemplate.findOne(query1, Items.class);
		return cartUpdated;
	}

	@Override
	public List<Cart> searchCart(Cart cart) {
		Query query = new Query();
		if(cart.getCartId() != null) query.addCriteria(Criteria.where("cartId").is(cart.getCartId()));
		if(cart.getBookingEndDate() != null) query.addCriteria(Criteria.where("bookingEndDate").is(cart.getBookingEndDate()));
		if(cart.getBookingStartDate() != null) query.addCriteria(Criteria.where("bookingStartDate").is(cart.getBookingStartDate()));
		if(cart.getCreatedOn() != null) query.addCriteria(Criteria.where("createdOn").is(cart.getCreatedOn()));
		if(cart.getCustomerId() != null) query.addCriteria(Criteria.where("customerId").is(cart.getCustomerId()));
		if(cart.getDropAddress() != null) query.addCriteria(Criteria.where("dropAddress").is(cart.getDropAddress()));
		if(cart.getPickupAddress() != null) query.addCriteria(Criteria.where("pickupAddress").is(cart.getPickupAddress()));
		return mongoTemplate.find(query, Cart.class);
	}

	@Override
	public List<Items> findItemsByCartId(String cartId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("cartId").is(cartId));
		return mongoTemplate.find(query, Items.class);
	}


}
