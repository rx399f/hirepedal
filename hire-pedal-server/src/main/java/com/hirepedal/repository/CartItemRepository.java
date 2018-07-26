package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.CartItem;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {
	
}
