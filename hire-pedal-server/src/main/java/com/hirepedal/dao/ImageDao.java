package com.hirepedal.dao;

import com.hirepedal.model.Image;

public interface ImageDao {

	Image updateProfile(String profileLogoImageName, String imageId);

	String saveImage(Image image);


}