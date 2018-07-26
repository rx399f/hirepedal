package com.hirepedal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hirepedal.model.Partner;

@Repository
public interface PartnerRepository extends MongoRepository<Partner, String> {
	
}
