package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.ItemScheduled;

@Repository
public interface ItemScheduledRepository extends MongoRepository<ItemScheduled, String> {
	
}
