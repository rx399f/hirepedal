package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Cart;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
	
}
