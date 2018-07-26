package com.hirepedal.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Circle;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.PartnerDao;
import com.hirepedal.model.Address;
import com.hirepedal.model.Category;
import com.hirepedal.model.GPSTrack;
import com.hirepedal.model.Item;
import com.hirepedal.model.Partner;

@Repository
public class PartnerDaoImpl implements PartnerDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public List<Partner> getAllPartners() {
		return mongoTemplate.findAll(Partner.class);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Partner loginPartner(Partner partner) {
		Query query2 = new Query();
		query2.addCriteria(Criteria.where("email").is(partner.getEmail()).and("password").is(partner.getPassword()));
		Partner partnerResponse = mongoTemplate.findOne(query2, Partner.class);
		System.out.println("query2 - " + query2.toString());
		System.out.println("userTest2 - " + partnerResponse);
		return partnerResponse;
	}

	@Override
	public Partner findbyEmail(String email) {
		Query query2 = new Query();
		query2.addCriteria(Criteria.where("email").is(email));
		Partner partnerResponse = mongoTemplate.findOne(query2, Partner.class);
		return partnerResponse;
	}

	@Override
	public Partner savePartner(Partner partner) {
		mongoTemplate.save(partner);
		return partner;
	}

	@Override
	public List<Address> getNearByPartners(double lat, double lng, double distance) {
		int limit = 100;
		//GeoResults<Address> listOfAddress = listNear(customerId, distance, null, limit, lat, lng);
		Point basePoint = new Point(lng, lat);
		Distance radius = new Distance(distance, Metrics.MILES);
		Circle area = new Circle(basePoint, radius);
		
		Query query = new Query();
		query.addCriteria(Criteria.where("location").withinSphere(area));
		query.limit(limit);
		return  mongoTemplate.find(query, Address.class);
	}
	/*public GeoResults<Address> listNear(String customerId, double distance, Metric distanceMetric, int limit, double lat, double lng) {
        NearQuery query2 = NearQuery.near(lat, lng).maxDistance(new Distance(distance, Metrics.MILES)).num(limit);
        return mongoTemplate.geoNear(query2, Address.class);
    }*/

	@Override
	public List<Item> getItemsByPartnerId(String partnerId) {
		Query query4 = new Query();
		query4.addCriteria(Criteria.where("partnerId").is(partnerId));
		return mongoTemplate.find(query4, Item.class);
	}

	@Override
	public Partner getPartnerIds(String partnerId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("partnerId").is(partnerId));
		return mongoTemplate.findOne(query, Partner.class);
	}
	
	@Override
	public List<Category> getCategories() {
		return mongoTemplate.findAll(Category.class);
	}

	@Override
	public Category saveCategory(Category category) {
		mongoTemplate.save(category);
		return category;
	}

	@Override
	public GPSTrack addLocation(GPSTrack track) {
		mongoTemplate.save(track);
		return track;
	}

}
