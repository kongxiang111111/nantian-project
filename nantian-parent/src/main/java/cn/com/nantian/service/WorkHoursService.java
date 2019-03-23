package cn.com.nantian.service;

import java.util.Date;

//工时管理类
public interface WorkHoursService {

    String getWorkerHours(String userName ,String projectName , Date start,Date end);

}
