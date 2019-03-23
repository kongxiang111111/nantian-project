package cn.com.nantian.mapper;

import cn.com.nantian.pojo.NtDictionariesExample;
import cn.com.nantian.pojo.NtDictionariesKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NtDictionariesMapper {
    /**
      * @Description: 根据条件查询字典数据
      * @Param: [dictionariesKey]
      * @Return: java.util.List<cn.com.nantian.pojo.NtDictionariesKey>
      * @Auther: Fly
      * @Date: 2019/3/19 16:46
      **/
    List<NtDictionariesKey> selectDictionariesList(NtDictionariesKey dictionariesKey);

    /**
      * @Description: 根据条件查询字典数据
      * @Param: [dictionariesKey]
      * @Return: cn.com.nantian.pojo.NtDictionariesKey
      * @Auther: Fly
      * @Date: 2019/3/20 15:25
      **/
    NtDictionariesKey selectDictionaries(NtDictionariesKey dictionariesKey);

    int countByExample(NtDictionariesExample example);

    int deleteByExample(NtDictionariesExample example);

    int deleteByPrimaryKey(NtDictionariesKey key);

    int insert(NtDictionariesKey record);

    int insertSelective(NtDictionariesKey record);

    List<NtDictionariesKey> selectByExample(NtDictionariesExample example);

    int updateByExampleSelective(@Param("record") NtDictionariesKey record, @Param("example") NtDictionariesExample example);

    int updateByExample(@Param("record") NtDictionariesKey record, @Param("example") NtDictionariesExample example);
}