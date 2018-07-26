package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
	
}
