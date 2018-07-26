package com.hirepedal.util;

import java.io.File;

public class CONSTANT {

	public static final String HOST="mail.smtp.host";
	public static final String PORT="mail.smtp.socketFactory.port";
	public static final String AUTH="mail.smtp.auth";
	public static final String USER="mail.login.username";
	public static final String PASSWORD="mail.login.password";
	public static final String STATUS="mail.status";
	public static final String MAIL_LOCALHOST = "mail.smtp.localhost";
	
	public static final String SUCCESS = "success";
	public static final String SUCCESS_CODE = "200";
	public static final String FAIL = "fail";
	public static final String FAIL_CODE = "301";
	public static final String LOGIN_FAILED_MESSAGE = "please check username and password";
	public static final String USER_ALREADY_EXISTS = "email already exists";
	public static final String DATA_PERSISTENT_ERROR = "persistent data error";
	public static final String PARTNER = "PARTNER";
	public static final String CC_EMAIL = "mail.cc";
	public static final String CUSTOMER_REGISTRATION_SUBJECT = "Customer Registration!";
	public static final String PARTNER_REGISTRATION_SUBJECT = "Partner Registration!";
	public static final String REF_ID_OR_REFTYPE_NOT_FOUND = "refId or refType in null";
	public static final String UPLOAD_LOCATION_SERVER = "/opt/static/image";
	public static final String PROFILE_UPLOAD_LOCATION="Per"+File.separator+"HP_Image_Logo";
	public static final String EXTENSION ="png";	
	public static final String UNDERSCORE ="_";
	public static final String DOT =".";
	public static final String IMAGE_UPLOAD_FAILED = "image uploading failed";
	public static final String NULL_REQUEST = "Null Request Object";
	public static final String RECORD_NOT_FOUND = "empty record set";

}
