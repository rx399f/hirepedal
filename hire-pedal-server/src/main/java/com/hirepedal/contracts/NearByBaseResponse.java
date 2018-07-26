package com.hirepedal.contracts;

import java.util.List;

public class NearByBaseResponse extends BaseResponse{
	
	List<PartnerItemDetails> nearBy;

	public List<PartnerItemDetails> getNearBy() {
		return nearBy;
	}

	public void setNearBy(List<PartnerItemDetails> nearBy) {
		this.nearBy = nearBy;
	}
	
}
