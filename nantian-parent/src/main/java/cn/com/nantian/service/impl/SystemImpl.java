package cn.com.nantian.service.impl;

import cn.com.nantian.mapper.NtTypeDictionariesMapper;
import cn.com.nantian.pojo.NtTypeDictionaries;
import cn.com.nantian.service.SystemService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class SystemImpl implements SystemService {


    @Resource
    private NtTypeDictionariesMapper typeDictionariesMapper;

    @Override
    public List<NtTypeDictionaries> selectTypedict() {
        return typeDictionariesMapper.selectByExample(null);
    }

    /**
     * 添加参数类别
     * @param typeDictionaries
     * @return
     */
    @Override
    public int addParamCate(NtTypeDictionaries typeDictionaries) {
        return typeDictionariesMapper.insert(typeDictionaries);
    }



}
