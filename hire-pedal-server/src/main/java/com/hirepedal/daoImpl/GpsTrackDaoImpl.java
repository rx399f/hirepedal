package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.GpsTrackDao;
import com.hirepedal.model.GPSTrack;

@Repository
public class GpsTrackDaoImpl implements GpsTrackDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@SuppressWarnings("unused")
	@Override
	public List<GPSTrack> getLocations(String deviceId, int limit) {
		if(new Integer(limit) == null){
			limit = 100;
		}
		Query query = new Query();
		query.addCriteria(Criteria.where("deviceId").is(deviceId));
		query.with(new Sort(Sort.Direction.DESC, "time"));
		query.limit(limit);
		return mongoTemplate.find(query, GPSTrack.class);
	}


}
