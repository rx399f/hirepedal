package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.OrderDao;
import com.hirepedal.model.Order;

@Repository
public class OrderDaoImpl implements OrderDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public Order addOrder(Order order) {
		Order orderPersisted = null;
		if(order != null && order.getOrderId() == null){
			// save order
			mongoTemplate.save(order);
			return order;
		} else {
			// Update order 
			Query query = new Query();
			query.addCriteria(Criteria.where("orderId").is(order.getOrderId()));
			Update update = new Update();
			
			if (order.getStatus() != null)
				update.set("status", order.getStatus());
			if (order.getPickupAddress() != null)
				update.set("pickupAddress", order.getPickupAddress());
			if (order.getDropAddress() != null)
				update.set("dropAddress", order.getDropAddress());

			mongoTemplate.updateFirst(query, update, Order.class);

			Query query1 = new Query();
			query1.addCriteria(Criteria.where("orderId").is(order.getOrderId()));
			orderPersisted = mongoTemplate.findOne(query1, Order.class);
			return orderPersisted;
		}
	}

	@Override
	public List<Order> searchOrder(Order order) {
		Query query = new Query();
		if(order.getOrderId() != null) query.addCriteria(Criteria.where("orderId").is(order.getOrderId()));
		if(order.getCartId() != null) query.addCriteria(Criteria.where("cartId").is(order.getCartId()));
		if(order.getCustomerId() != null) query.addCriteria(Criteria.where("customerId").is(order.getCustomerId()));
		if(order.getOrderDate() != null) query.addCriteria(Criteria.where("orderDate").is(order.getOrderDate()));
		if(order.getDropAddress() != null) query.addCriteria(Criteria.where("dropAddress").is(order.getDropAddress()));
		return mongoTemplate.find(query, Order.class);
	}


}
