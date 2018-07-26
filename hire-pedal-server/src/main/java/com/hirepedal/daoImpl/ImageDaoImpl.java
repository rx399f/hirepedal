package com.hirepedal.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.hirepedal.dao.ImageDao;
import com.hirepedal.model.Image;

@Repository
public class ImageDaoImpl implements ImageDao {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public Image updateProfile(String profileLogoImageName, String imageId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("imageId").is(imageId));
		query.fields().include("imageId");

		Image imageI = mongoTemplate.findOne(query, Image.class);
		System.out.println("userTest3 - " + imageI);

		Update update = new Update();
		update.set("url", profileLogoImageName);

		mongoTemplate.updateFirst(query, update, Image.class);

		//returns everything
		Query query1 = new Query();
		query1.addCriteria(Criteria.where("imageId").is(imageId));

		Image userTest3_1 = mongoTemplate.findOne(query1, Image.class);
		System.out.println("userTest3_1 - " + userTest3_1);
		return userTest3_1;
	}

	@Override
	public String saveImage(Image image) {
		mongoTemplate.save(image);
		return image.getImageId();
	}

}
