package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Cart;
import com.hirepedal.model.Items;

public class CartItems {
	
	private Cart cart;
	private List<Items> items;
	
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	public List<Items> getItems() {
		return items;
	}
	public void setItems(List<Items> items) {
		this.items = items;
	}
	
	
	
}
