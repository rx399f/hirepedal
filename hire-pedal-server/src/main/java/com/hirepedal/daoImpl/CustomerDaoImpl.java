package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.CustomerDao;
import com.hirepedal.model.Address;
import com.hirepedal.model.Customer;

@Repository
public class CustomerDaoImpl implements CustomerDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public List<Customer> getAllCustomers() {
		return mongoTemplate.findAll(Customer.class);
	}

	@Override
	public Customer loginCustomer(Customer customer) {
		Query query2 = new Query();
		query2.addCriteria(Criteria.where("email").is(customer.getEmail()).and("password").is(customer.getPassword()));
		Customer customerResponse = mongoTemplate.findOne(query2, Customer.class);
		System.out.println("query2 - " + query2.toString());
		System.out.println("userTest2 - " + customerResponse);
		return customerResponse;
	}

	@Override
	public Customer findbyEmail(String email) {
		Query query2 = new Query();
		query2.addCriteria(Criteria.where("email").is(email));
		Customer customerResponse = mongoTemplate.findOne(query2, Customer.class);
		return customerResponse;
	}

	@Override
	public Customer saveCustomer(Customer customer) {
		mongoTemplate.save(customer);
		return customer;
	}

	@Override
	public Address saveAddress(Address address) {
		mongoTemplate.save(address);
		return address;
	}
	
	
}
