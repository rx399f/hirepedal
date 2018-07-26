package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.ItemDao;
import com.hirepedal.model.Item;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;

@Repository
public class ItemDaoImpl implements ItemDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public Item addItem(Item item) {
		mongoTemplate.save(item);
		return item;
	}

	@Override
	public List<Item> getItem(Item item) {
		Query query = new Query();
		query.addCriteria(Criteria.where("partnerId").is(item.getPartnerId()));
		return mongoTemplate.find(query,Item.class);
	}

}
