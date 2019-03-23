package cn.com.nantian.service.impl;

import cn.com.nantian.mapper.NtPerInProjectMapper;
import cn.com.nantian.pojo.NtPerInProject;
import cn.com.nantian.service.PerInProjectService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Description:
 * @Author：Fly
 * @Date: 2019/3/20 10:19
 * @Version：1.0
 */
@Service
public class PerInProjectServiceImpl implements PerInProjectService{

    @Resource
    private NtPerInProjectMapper perInProjectMapper;

    /**
     * @Description: 查询员工项目集合
     * @Param: [perInProject]
     * @Return: java.util.List<cn.com.nantian.pojo.NtPerInProject>
     * @Auther: Fly
     * @Date: 2019/3/20 10:16
     **/
    public List<NtPerInProject> selectPerInProjectList(NtPerInProject perInProject){
        return perInProjectMapper.selectPerInProjectList(perInProject);
    }
}
