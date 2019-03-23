package cn.com.nantian.service;

import cn.com.nantian.pojo.NtCustomer;

import java.util.List;
import java.util.Map;
/**
 * @Description:客户管理
 * @Author：Fly
 * @Date: 2019/3/19 9:34
 * @Version：1.0
 */
public interface CustomerService {

    /**
      * @Description: 查询客户信息列表
      * @Param: [example]
      * @Return: java.util.List<cn.com.nantian.pojo.NtProjectInfo>
      * @Auther: Fly
      * @Date: 2019/3/19 10:32
      **/
    public List<NtCustomer> selectCustomerList(NtCustomer customer);
    /**
      * @Description: 设置客户类型名称 项目人数
      * @Param: [customerList]
      * @Return: void
      * @Auther: Fly
      * @Date: 2019/3/19 16:55
      **/
    public void setCustomerTypeName(List<NtCustomer> customerList);
    /**
      * @Description: 根据项目编号删除一条数据
      * @Param: [projectNumber]
      * @Return: int
      * @Auther: Fly
      * @Date: 2019/3/20 10:38
      **/
    public int deleteCustomer(int projectNumber);
    /**
      * @Description: 新增客户信息
      * @Param: [customer]
      * @Return: int
      * @Auther: Fly
      * @Date: 2019/3/20 13:51
      **/
    public int addCustomer(NtCustomer customer);
    /**
      * @Description: 更新客户信息
      * @Param: [customer]
      * @Return: int
      * @Auther: Fly
      * @Date: 2019/3/20 14:29
      **/
    public int updateCustomer(NtCustomer customer);

    //添加类别信息
    public  void addCustType(String projectName, Map<String ,String> type, String leave);


}
