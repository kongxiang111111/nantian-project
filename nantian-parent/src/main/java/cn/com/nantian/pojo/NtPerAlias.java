package cn.com.nantian.pojo;

public class NtPerAlias {
    private Integer perId;

    private Integer projectNumber;

    private String inProjectName;

    private String inCompanyName;

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

    public String getInProjectName() {
        return inProjectName;
    }

    public void setInProjectName(String inProjectName) {
        this.inProjectName = inProjectName == null ? null : inProjectName.trim();
    }

    public String getInCompanyName() {
        return inCompanyName;
    }

    public void setInCompanyName(String inCompanyName) {
        this.inCompanyName = inCompanyName == null ? null : inCompanyName.trim();
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo == null ? null : idNo.trim();
    }
}