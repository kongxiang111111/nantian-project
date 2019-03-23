package cn.com.nantian.service;

import cn.com.nantian.pojo.NtPerInProject;

import java.util.List;

/**
 * @Description: 员工项目管理
 * @Author：Fly
 * @Date: 2019/3/20 10:18
 * @Version：1.0
 */
public interface PerInProjectService {

    /**
     * @Description: 查询员工项目集合
     * @Param: [perInProject]
     * @Return: java.util.List<cn.com.nantian.pojo.NtPerInProject>
     * @Auther: Fly
     * @Date: 2019/3/20 10:16
     **/
    List<NtPerInProject> selectPerInProjectList(NtPerInProject perInProject);
}
