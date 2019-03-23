package cn.com.nantian.service.impl;


import cn.com.nantian.mapper.NtPersonnelApplyMapper;
import cn.com.nantian.mapper.NtWorkingHoursMapper;
import cn.com.nantian.service.WorkHoursService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

//工时管理类
@Service
public class WorkHourceimpl  implements WorkHoursService{

    @Resource
    //工時
    private NtWorkingHoursMapper workingHoursMapper;

    //項目名稱 nt_project_info
    //部门名 nt_personnel
    private NtPersonnelApplyMapper personnelApplyMapper;

    @Override
    public String getWorkerHours(String userName , String projectName ,Date start, Date end) {


        return null;
    }
}
