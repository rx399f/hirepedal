package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {
	
}
