package com.hirepedal.dao;

import java.util.List;
import java.util.Set;

import com.hirepedal.model.Address;
import com.hirepedal.model.Category;
import com.hirepedal.model.GPSTrack;
import com.hirepedal.model.Item;
import com.hirepedal.model.Partner;

public interface PartnerDao {

	List<Partner> getAllPartners();

	Partner loginPartner(Partner partner);

	Partner findbyEmail(String email);

	Partner savePartner(Partner partner);

	public List<Address> getNearByPartners(double lat, double lng, double distance);

	List<Item> getItemsByPartnerId(String partnerId);

	Partner getPartnerIds(String partnerId);

	List<Category> getCategories();

	Category saveCategory(Category category);

	GPSTrack addLocation(GPSTrack track);

}