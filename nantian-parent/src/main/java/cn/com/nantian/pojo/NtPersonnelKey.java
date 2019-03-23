package cn.com.nantian.pojo;

import java.io.Serializable;

public class NtPersonnelKey implements Serializable{
    private Integer perId;

    private String idNo;

    public Integer getPerId() {
        return perId;
    }

    public void setPerId(Integer perId) {
        this.perId = perId;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo == null ? null : idNo.trim();
    }
}