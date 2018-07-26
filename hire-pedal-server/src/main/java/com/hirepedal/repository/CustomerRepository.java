package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
	
}
