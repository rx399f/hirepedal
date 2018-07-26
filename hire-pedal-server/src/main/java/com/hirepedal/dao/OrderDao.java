package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.Order;

public interface OrderDao {

	Order addOrder(Order order);

	List<Order> searchOrder(Order order);
	
}