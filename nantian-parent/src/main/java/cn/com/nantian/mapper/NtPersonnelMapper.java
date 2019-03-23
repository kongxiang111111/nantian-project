package cn.com.nantian.mapper;

import cn.com.nantian.pojo.Item1;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.pojo.NtPersonnelExample;
import cn.com.nantian.pojo.NtPersonnelKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NtPersonnelMapper {
    int countByExample(NtPersonnelExample example);

    int deleteByExample(NtPersonnelExample example);

    int deleteByPrimaryKey(NtPersonnelKey key);

    int insert(NtPersonnel record);

    int insertSelective(NtPersonnel record);

    List<NtPersonnel> selectByExample(NtPersonnelExample example);

    NtPersonnel selectByPrimaryKey(NtPersonnelKey key);

    /**
     * 根据员工身份证号查询
     * @param idNO
     * @return
     */
    NtPersonnel selectByPrimaryIdNo(String idNO);

    /**
     * 查询员工姓名
     * @param perId
     * @return
     */
    String selectByUserId(int perId);
    int updateByExampleSelective(@Param("record") NtPersonnel record, @Param("example") NtPersonnelExample example);

    /**
     * 根据部门deptId和员工name查询员工信息
     * @param deptId
     * @param name
     * @return
     */
    List<NtPersonnel> findPersonnelBydeptIdAndName(@Param("deptId") int deptId , @Param("name") String name);

    /**
     * 根据公司邮箱获取员工信息
     * @param companyEmail
     * @return
     */
    NtPersonnel selectByEmial(String companyEmail);

    /**
     *根据手机号获取员工信息
     * @param mobileNo
     * @return
     */
    NtPersonnel selectByMobileNo(String mobileNo);

    /**
     * 根据身份证号获取员工信息
     * @param idNo
     * @return
     */
    NtPersonnel selectByIdNo(String idNo);


    /**
     * 根据手机号获取员工信息
     * @param mobileNo
     * @return
     */
    NtPersonnel selectByPrimaryMobileNo(String mobileNo);

    int updateByExample(@Param("record") NtPersonnel record, @Param("example") NtPersonnelExample example);

    int updateByPrimaryKeySelective(NtPersonnel record);

    int updateByPrimaryKey(NtPersonnel record);
}