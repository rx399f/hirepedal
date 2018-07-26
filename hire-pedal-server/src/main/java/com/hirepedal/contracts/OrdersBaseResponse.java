package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Order;

public class OrdersBaseResponse extends BaseResponse{
	
	List<Order> orders;

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	
	

}
