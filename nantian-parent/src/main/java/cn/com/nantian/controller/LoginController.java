package cn.com.nantian.controller;


import cn.com.nantian.pojo.entity.Result;
import cn.com.nantian.service.LoginService;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

//用户登录前端
@Controller
@RequestMapping("/user")
public class LoginController {

    @Resource
    private LoginService loginService;

    //查询是否有该员工信息(用于登录)
//    @RequestMapping("/login")
//    @ResponseBody
//    public Result loginUser(String  username, String password){
//        NtUser user = new NtUser();
//        try {
//            user = loginService.LoginUser(username,password);
//            System.out.println(user.getUserName());
//            System.out.println(user.getUserId());
//            System.out.println(user.getUserLevel());
//            System.out.println(user.getUserPassword());
//            if(user!=null){
//                return new Result(true, "登录成功" );
//            }else {
//                return new Result(false, "没有这个用户" );
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new Result(false, "404" );
//        }
//    }

}
