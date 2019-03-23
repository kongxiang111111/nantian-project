package cn.com.nantian.service;


import cn.com.nantian.pojo.NtTypeDictionaries;

import java.util.List;

/**
 * 系统参数
 */
public interface SystemService {

    /**
     * 添加参数类别
     * @param typeDictionaries
     * @return
     */
    int addParamCate(NtTypeDictionaries typeDictionaries);

    /**
     * 查询类别信息
     * @return
     */
    List<NtTypeDictionaries> selectTypedict();


}
