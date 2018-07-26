package com.hirepedal.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class GPSTrack {
	
	@Id
	private String gpsTrackId;
	private String deviceId;
	private double plat;
	private double plong;
	private Date time;
	
	
	
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getGpsTrackId() {
		return gpsTrackId;
	}
	public void setGpsTrackId(String gpsTrackId) {
		this.gpsTrackId = gpsTrackId;
	}
	public String getDeviceId() {
		return deviceId;
	}
	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}
	public double getPlat() {
		return plat;
	}
	public void setPlat(double plat) {
		this.plat = plat;
	}
	public double getPlong() {
		return plong;
	}
	public void setPlong(double plong) {
		this.plong = plong;
	}
	
	

}
