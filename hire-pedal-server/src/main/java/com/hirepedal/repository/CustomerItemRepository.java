package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.CustomerItem;

@Repository
public interface CustomerItemRepository extends MongoRepository<CustomerItem, String> {
	
}
