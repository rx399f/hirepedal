package com.hirepedal.controller;


import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.hirepedal.contracts.ImageRequest;
import com.hirepedal.contracts.ImageResponse;
import com.hirepedal.model.Image;
import com.hirepedal.services.Service;
import com.hirepedal.util.CONSTANT;

@RestController
@RequestMapping(value = "/image")
@CrossOrigin(maxAge=4000)
public class ImageRestController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private Service service;

	@RequestMapping(value = "/logo", method = RequestMethod.POST) 
	 public ImageResponse saveProfileLogo(MultipartHttpServletRequest request) 
	{
		ImageResponse response = new ImageResponse();
		Image image = null;
		List<Image> imagesList = new ArrayList<>();
		try {
			ImageRequest images = new ImageRequest();
			String refId = (request.getParameter("refId") != null) ? request.getParameter("refId"): null; 
			String refType = (request.getParameter("refType") != null) ? request.getParameter("refType"): null; 
			if(refId == null && refType == null){
				response.setStatus(CONSTANT.FAIL);
				response.setMessage(CONSTANT.REF_ID_OR_REFTYPE_NOT_FOUND);
				return response;
			}
			images.setImage(request.getFile("image"));
			images.setRefId(refId);
			images.setRefType(refType);
			String imageId = service.saveImage(images);
			images.setImageId(imageId);
			image = service.saveProfileLogoImage(images);
			if(image != null){
				imagesList.add(image);
				response.setImages(imagesList);
				response.setStatus(CONSTANT.SUCCESS);
				response.setStatusCode(CONSTANT.SUCCESS_CODE);
			}else{
				response.setStatus(CONSTANT.SUCCESS);
				response.setStatusCode(CONSTANT.SUCCESS_CODE);
				response.setMessage(CONSTANT.IMAGE_UPLOAD_FAILED);
			}
			
		} catch(Exception irException){
			irException.printStackTrace();
		}
		return response;
	}
}