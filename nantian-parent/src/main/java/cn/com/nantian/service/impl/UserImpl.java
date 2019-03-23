package cn.com.nantian.service.impl;

import cn.com.nantian.mapper.NtDepartmentMapper;
import cn.com.nantian.mapper.NtPersonnelMapper;
import cn.com.nantian.pojo.Item1;
import cn.com.nantian.pojo.NtDepartment;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.pojo.NtPersonnelKey;
import cn.com.nantian.pojo.entity.ResponseData;
import cn.com.nantian.service.UserService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;


import javax.annotation.Resource;
import javax.print.DocFlavor;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class UserImpl implements UserService{



    @Resource
    private NtPersonnelMapper personnelMapper;

    /**根据id查询员工姓名NT_PERSONNEL
     */
    @Override
    public String  selectByUserId(int perId) {
        return personnelMapper.selectByUserId(perId);
    }

    /**
     * 添加员工信息
     * @param personnel
     */
    @Override
    public int addUser(NtPersonnel personnel) {
        System.out.println(personnel.getIdNo());

        //根据身份证号判断该员工是否已经添加
        NtPersonnel oldPersonnelList = personnelMapper.selectByPrimaryIdNo(personnel.getIdNo());
//        for(NtPersonnel tmp:oldPersonnelList) {
//            if(tmp.getIdNo().equals(personnel.getIdNo())) {
//                return 5;
//            }
//        }
        //设置员工的初始化密码
        personnel.setPassword(DigestUtils.md5DigestAsHex("nt0000".getBytes()));
        //设置用户的权限,超级管理员->0,管理员->1,普通用户->2
        if("超级管理员".equals(personnel.getJurisdiction())){
            personnel.setJurisdiction("0");
        }else if ("管理员".equals(personnel.getJurisdiction())){
            personnel.setJurisdiction("1");
        }else if("员工".equals(personnel.getJurisdiction())){
            personnel.setJurisdiction("2");
        }else {
            personnel.setJurisdiction(" ");
        }
        //设置在职状态
        if ("在职".equals(personnel.getStatus())){
            personnel.setStatus("1");
        }else if("离职".equals(personnel.getStatus())){
            personnel.setStatus("2");
        }else {
            personnel.setStatus(" ");
        }

        //设置职位
        if ("员工".equals(personnel.getPosition())){
            personnel.setPosition("1");
        }else if ("部门经理".equals(personnel.getPosition())){
            personnel.setPosition("2");
        }else if ("总经理".equals(personnel.getPosition())){
            personnel.setPosition("3");
        }else{
            personnel.setPosition(" ");
        }
        return personnelMapper.insert(personnel);
    }

    /**
     * 根据部门deptId和员工name查询员工信息
     * @param deptId
     * @param name
     * @return
     */
    public List<NtPersonnel> findPersonnelBydeptIdAndName(int deptId , String name){
        List<NtPersonnel>  personnelList = personnelMapper.findPersonnelBydeptIdAndName(deptId,name);
        return personnelList;
    }




    /**
     *根据身份证号查询员工信息
     * @return
     */
    public NtPersonnel findPersonnlByIdno(String idNo){
       return  personnelMapper.selectByPrimaryIdNo(idNo);
    }

    /**
     * 用于员工登录
     * @param jsonname
     * @return
     */
    @Override
    public NtPersonnel findOne(String jsonname) {

        NtPersonnel personnel=null;
        //判断这个字符串是手机号,身份证号,还是公司邮箱号
        if(jsonname.endsWith("@nantian.com.cn")){//根据邮箱查询用户
            personnel = personnelMapper.selectByEmial(jsonname);
         }else if(jsonname.length()==11){//根据手机号获取
            personnel = personnelMapper.selectByPrimaryMobileNo(jsonname);
        }else if(jsonname.length()==18){//根据身份证号查询
            personnel = personnelMapper.selectByPrimaryIdNo(jsonname);
        }


        return null;
    }
}
