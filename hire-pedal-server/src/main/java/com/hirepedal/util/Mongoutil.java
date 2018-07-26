package com.hirepedal.util;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

public class Mongoutil {
	
	public Integer getNextSequence(MongoDatabase dbConnection, String idName){
		MongoCollection<Document> collection = dbConnection.getCollection("Counter");
		Document counter = new Document();
		counter.put("idName", idName);
		FindIterable<Document> iterable = collection.find(counter);
		MongoCursor<Document> cursor = iterable.iterator();
        if (cursor.hasNext()){
        	Document counterDBObject  =  cursor.next();
        	Integer sequence = (Integer) counterDBObject.get("sequence");
        	sequence++;
        	System.out.println("tadaa : "+ sequence);
        	counterDBObject.put("sequence", sequence);
        	collection.findOneAndReplace(counter, counterDBObject);
            return sequence;
        }else{
        	counter.put("sequence", 1);
        	collection.insertOne(counter);
        	return 1;
        }
	}

}
