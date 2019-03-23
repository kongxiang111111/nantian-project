package cn.com.nantian.controller;


import cn.com.nantian.mapper.NtDepartmentMapper;
import cn.com.nantian.pojo.NtDepartment;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.service.DepartmentService;
import cn.com.nantian.service.LoginService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/a")
public class IndexController {


    @Resource
    private  LoginService loginService;
    @Resource
    private NtDepartmentMapper departmentService;

    //添加部门信息
    @RequestMapping("add")
    @ResponseBody
    public String  addDepartment(String name){
        System.out.println("eeee");
        try {

            return "插入的条数是" ;
        } catch (Exception e) {
            e.printStackTrace();
            return  "添加失败";
        }

    }

    @RequestMapping("/a")
    @ResponseBody
    public List<NtPersonnel> findAllq()  {
        System.out.println("1111");
       return loginService.findAll();
    }
}
