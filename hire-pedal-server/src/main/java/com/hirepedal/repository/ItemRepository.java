package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Item;

@Repository
public interface ItemRepository extends MongoRepository<Item, String> {
	
}
