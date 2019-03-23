package cn.com.nantian.service.impl;


import cn.com.nantian.mapper.NtPersonnelMapper;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.service.LoginService;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


@Service
public class LoginImpl implements LoginService {
//
//    @Resource
//    private NtUserMapper userMapper;
     @Resource
    private NtPersonnelMapper personnelMapper;
//
//    @Override
//    public NtUser LoginUser(String username, String password)  {
//
//        NtUser user = new NtUser();
//        //检测前台传过来的username是否已经存在
////        user.setUserName(username);
////        user.setUserPassword(password);
//
//        NtUser loginUser = null;
//        try {
//            //查询客户信息
//            loginUser = userMapper.findByUsernameAndPassword(username,password);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//      return loginUser;
//
//
//    }
//
    @Override
    public List<NtPersonnel> findAll() {
        System.out.println("2222");
        List<NtPersonnel> www= personnelMapper.selectByExample(null);
        System.out.println(www);
        for(NtPersonnel str : www) {

            System.out.println(str);

        }
        return www;
    }
}
