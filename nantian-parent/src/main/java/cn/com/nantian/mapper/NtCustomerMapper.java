package cn.com.nantian.mapper;

import cn.com.nantian.pojo.NtCustomer;
import cn.com.nantian.pojo.NtCustomerExample;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface NtCustomerMapper {

    List<NtCustomer> selectCustomerList(NtCustomer customer);

    int countByExample(NtCustomerExample example);

    int deleteByExample(NtCustomerExample example);

    int deleteByPrimaryKey(Integer projectNumber);

    int insert(NtCustomer record);

    int insertSelective(NtCustomer record);

    List<NtCustomer> selectByExample(NtCustomerExample example);

    NtCustomer selectByPrimaryKey(Integer projectNumber);

    int updateByExampleSelective(@Param("record") NtCustomer record, @Param("example") NtCustomerExample example);

    int updateByExample(@Param("record") NtCustomer record, @Param("example") NtCustomerExample example);

    int updateByPrimaryKeySelective(NtCustomer record);

    int updateByPrimaryKey(NtCustomer record);
}