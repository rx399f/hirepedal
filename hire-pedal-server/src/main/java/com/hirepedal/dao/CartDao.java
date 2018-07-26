package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.Cart;
import com.hirepedal.model.Items;

public interface CartDao {

	Cart addToCart(Cart cart);

	Items addCartItems(Items cartItem);

	Cart updateCartDetails(Cart cart);

	Items updateCartItems(Items updateItem);

	List<Cart> searchCart(Cart cart);

	List<Items> findItemsByCartId(String cartId);

	
}