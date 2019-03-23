package cn.com.nantian.pojo;

import lombok.EqualsAndHashCode;
import lombok.Data;

/**
 * 客户信息实体
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class NtCustomer {
    /**项目编号*/
    private Integer projectNumber;
    /**项目名称*/
    private String projectName;
    /**客户类别*/
    private String custType;
    /**部门编号*/
    private Integer deptId;
    /**在场负责人*/
    private Integer chargeId;
    /**地址*/
    private String address;

    //======================
    /**部门名称*/
    private String deptName;
    /**在场负责人姓名*/
    private String chargeName;
    /**客户类别*/
    private String custTypeName;
    /**项目人数*/
    private Integer peopleNumber;
}