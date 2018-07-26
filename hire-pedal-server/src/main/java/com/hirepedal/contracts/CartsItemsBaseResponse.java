package com.hirepedal.contracts;

import java.util.List;

public class CartsItemsBaseResponse extends BaseResponse{
	
	private List<CartItems> cartItems;

	public List<CartItems> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItems> cartItems) {
		this.cartItems = cartItems;
	}
	
	

}
