package cn.com.nantian.service;

import cn.com.nantian.pojo.Item1;
import cn.com.nantian.pojo.LoginItem;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.pojo.NtPersonnelKey;

import java.util.Date;
import java.util.List;

public interface UserService {

    /**
     * 添加员工信息
     * NT_PERSONNEL
     *
     * @param personnel
     */
    public int addUser(NtPersonnel personnel);

    /**根据id查询员工姓名
     */
    String  selectByUserId(int perId);

    /**
     * 根据部门deptId和员工name查询员工信息
     * @param deptId
     * @param name
     * @return
     */
    List<NtPersonnel> findPersonnelBydeptIdAndName(int deptId ,String name);


    /**
     * 根据身份证号查询员工信息
     * @return
     */
    public NtPersonnel findPersonnlByIdno(String idNo);


    /**
     * 用于员工的登录
     * @param jsonname
     * @return
     */
    NtPersonnel findOne(String jsonname);


}