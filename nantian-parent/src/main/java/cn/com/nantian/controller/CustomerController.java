package cn.com.nantian.controller;

import cn.com.nantian.pojo.NtCustomer;
import cn.com.nantian.pojo.entity.ResponseData;
import cn.com.nantian.pojo.entity.Result;
import cn.com.nantian.service.CustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

//客户管理
@Controller
@RequestMapping("/customer")
public class CustomerController {
    private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);

    @Resource
    private CustomerService customerService;

    @InitBinder("customer")
    public void initBindCustomer(HttpServletRequest request, ServletRequestDataBinder binder) {
        binder.setFieldDefaultPrefix("customer.");
    }

    /**
     * @Description: 查询客户信息列表
     * @Param: [customer] 客户实体
     * @Return: cn.com.nantian.pojo.entity.ResponseData
     * @Auther: Fly
     * @Date: 2019/3/19 14:21
     **/
    @RequestMapping("/findAll")
    @ResponseBody
    public ResponseData findAll(@ModelAttribute("customer") NtCustomer customer) {
        try {
            List<NtCustomer> customerList = customerService.selectCustomerList(customer);
            customerService.setCustomerTypeName(customerList);
            return ResponseData.ok().putDataValue("data", customerList);
        } catch (Exception e) {
            logger.error("CustomerController.findAll", e);
            return ResponseData.forbidden();
        }
    }

    /**
     * @Description: 根据项目编号删除一条数据
     * @Param: [projectNumber]  项目编号
     * @Return: cn.com.nantian.pojo.entity.ResponseData
     * @Auther: Fly
     * @Date: 2019/3/20 11:21
     **/
    @RequestMapping("/delete")
    @ResponseBody
    public ResponseData deleteCustomer(@RequestParam("projectNumber") int projectNumber) {
        try {
            int num = customerService.deleteCustomer(projectNumber);
            return ResponseData.ok().putDataValue("delete number", num);
        } catch (Exception e) {
            logger.error("CustomerController.deleteCustomer", e);
            return ResponseData.forbidden();
        }
    }

    /**
     * @Description: 新增客户信息内容
     * @Param: [customer]
     * @Return: cn.com.nantian.pojo.entity.ResponseData
     * @Auther: Fly
     * @Date: 2019/3/20 13:55
     **/
    @RequestMapping("/add")
    @ResponseBody
    public ResponseData addCustomer(@ModelAttribute("customer") NtCustomer customer) {
        try {
            int id = customerService.addCustomer(customer);
            return ResponseData.ok().putDataValue(" Add success num ", id);
        } catch (Exception e) {
            logger.error("CustomerController.addCustomer", e);
            return ResponseData.forbidden();
        }
    }

    /**
     * @Description: 更新客户信息
     * @Param: [customer]
     * @Return: cn.com.nantian.pojo.entity.ResponseData
     * @Auther: Fly
     * @Date: 2019/3/20 14:30
     **/
    @RequestMapping("/update")
    @ResponseBody
    public ResponseData updateCustomer(@ModelAttribute("customer") NtCustomer customer) {
        try {
            int d = customerService.updateCustomer(customer);
            return ResponseData.ok().putDataValue("update number", d);
        } catch (Exception e) {
            logger.error("CustomerController.updateCustomer", e);
            return ResponseData.forbidden();
        }
    }

    //新增客户类别管理
    @RequestMapping("addtype")
    @ResponseBody
    public Result addType(String projectName, Map<String, String> type, String leave) {
        try {
            customerService.addCustType(projectName, type, leave);
            return new Result(true, "添加成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "添加失败");
        }
    }
}
