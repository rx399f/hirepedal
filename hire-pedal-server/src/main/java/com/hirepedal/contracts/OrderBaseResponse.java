package com.hirepedal.contracts;

import com.hirepedal.model.Order;

public class OrderBaseResponse extends BaseResponse{
	
	private Order order;

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	

}
