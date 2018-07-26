package com.hirepedal.daoImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.ItemDao;
import com.hirepedal.dao.ItemScheduledDao;
import com.hirepedal.enumData.ItemScheduledStatus;
import com.hirepedal.model.Item;
import com.hirepedal.model.ItemScheduled;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;

@Repository
public class ItemScheduledDaoImpl implements ItemScheduledDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public List<ItemScheduled> getAvailableItem(String itemId) {
		Query query = new Query();
		query.addCriteria(new Criteria().andOperator(
				Criteria.where("itemId").is(itemId),
		        Criteria.where("status").in(ItemScheduledStatus.CONFIRMED)
		    ));
		query.addCriteria(Criteria.where("bookingStartDate").lt(new Date()));
		query.addCriteria(Criteria.where("bookingEndDate").gte(new Date()));
		return mongoTemplate.find(query,ItemScheduled.class);
	}

	@Override
	public ItemScheduled addItemScheduled(ItemScheduled itemScheduled) {
		mongoTemplate.save(itemScheduled);
		return itemScheduled;
	}

	

}
