package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
	
}
