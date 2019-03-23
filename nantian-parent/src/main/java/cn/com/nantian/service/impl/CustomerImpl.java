package cn.com.nantian.service.impl;

import cn.com.nantian.mapper.NtCustTypeMapper;
import cn.com.nantian.mapper.NtCustomerMapper;
import cn.com.nantian.mapper.NtDictionariesMapper;
import cn.com.nantian.mapper.NtPerInProjectMapper;
import cn.com.nantian.pojo.NtCustTypeKey;
import cn.com.nantian.pojo.NtCustomer;
import cn.com.nantian.pojo.NtDictionariesKey;
import cn.com.nantian.pojo.NtPerInProject;
import cn.com.nantian.service.CustomerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CustomerImpl implements CustomerService {



    @Resource
    private NtCustTypeMapper custTypeMapper;
    @Resource
    private NtCustomerMapper customerMapper;
    @Resource
    private NtDictionariesMapper dictionariesMapper;
    @Resource
    private NtPerInProjectMapper perInProjectMapper;


    /**
      * @Description: 查询客户信息列表
      * @Param: [example]
      * @Return: java.util.List<cn.com.nantian.pojo.NtProjectInfo>
      * @Auther: Fly
      * @Date: 2019/3/19 10:37
      **/
    public List<NtCustomer> selectCustomerList(NtCustomer customer){
        return customerMapper.selectCustomerList(customer);
    }

    /**
     * @Description: 设置客户类型 项目人数
     * @Param: [customerList]
     * @Return: void
     * @Auther: Fly
     * @Date: 2019/3/19 16:55
     **/
    public void setCustomerTypeName(List<NtCustomer> customerList){
        String custType="cust";
        if(customerList!=null && customerList.size()>0){
            for(NtCustomer customer:customerList){
                //设置项目人数
                NtPerInProject perInProject=new NtPerInProject();
                perInProject.setProjectNumber(customer.getProjectNumber());
                List<NtPerInProject> perInProjectList=perInProjectMapper.selectPerInProjectList(perInProject);
                customer.setPeopleNumber(perInProjectList.size());
                //设置客户类型
                NtDictionariesKey dictionariesKey=new NtDictionariesKey();
                dictionariesKey.setDicType(custType);
                dictionariesKey.setDicCode(customer.getCustType());
                List<NtDictionariesKey> dictionariesKeyList=dictionariesMapper.selectDictionariesList(dictionariesKey);
                if(dictionariesKeyList!=null && dictionariesKeyList.size()>0){
                    customer.setCustTypeName(dictionariesKeyList.get(0).getDicValue());
                }
            }
        }
    }

    /**
     * @Description: 根据项目编号删除一条数据
     * @Param: [projectNumber]
     * @Return: int
     * @Auther: Fly
     * @Date: 2019/3/20 10:38
     **/
    public int deleteCustomer(int projectNumber){
        return customerMapper.deleteByPrimaryKey(projectNumber);
    }
    /**
     * @Description: 新增客户信息
     * @Param: [customer]
     * @Return: int
     * @Auther: Fly
     * @Date: 2019/3/20 13:51
     **/
    public int addCustomer(NtCustomer customer) {
        return customerMapper.insert(customer);
    }

    /**
     * @Description: 更新客户信息
     * @Param: [customer]
     * @Return: int
     * @Auther: Fly
     * @Date: 2019/3/20 14:29
     **/
    public int updateCustomer(NtCustomer customer){
        return customerMapper.updateByPrimaryKeySelective(customer);
    }

    //添加项目类别信息
    @Override
    public void addCustType(String projectName, Map<String ,String> type, String leave) {

        NtCustTypeKey custTypeKey = new NtCustTypeKey();
        //遍历map中的工作类别

        for (String workType : type.values()) {
            try {
                //设置客户类别名称
                 custTypeKey.setWorkType(projectName);
                //设置工作类型
                custTypeKey.setWorkType(workType);
                //设置技术等级
                custTypeKey.setWorkLeave(leave);

                custTypeMapper.insert(custTypeKey);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }




    }
}
