package cn.com.nantian.pojo;

import java.util.Date;

public class NtPerInProject {
    private Integer perId;

    private Integer projectNumber;

    private String inProjectLeave;

    private Date projectBegdate;

    private Date projectEnddate;

    private String workType;

    private String idNo;

    public Integer getPerId() {
        return perId;
    }

    public void setPerId(Integer perId) {
        this.perId = perId;
    }

    public Integer getProjectNumber() {
        return projectNumber;
    }

    public void setProjectNumber(Integer projectNumber) {
        this.projectNumber = projectNumber;
    }

    public String getInProjectLeave() {
        return inProjectLeave;
    }

    public void setInProjectLeave(String inProjectLeave) {
        this.inProjectLeave = inProjectLeave == null ? null : inProjectLeave.trim();
    }

    public Date getProjectBegdate() {
        return projectBegdate;
    }

    public void setProjectBegdate(Date projectBegdate) {
        this.projectBegdate = projectBegdate;
    }

    public Date getProjectEnddate() {
        return projectEnddate;
    }

    public void setProjectEnddate(Date projectEnddate) {
        this.projectEnddate = projectEnddate;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType == null ? null : workType.trim();
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo == null ? null : idNo.trim();
    }
}