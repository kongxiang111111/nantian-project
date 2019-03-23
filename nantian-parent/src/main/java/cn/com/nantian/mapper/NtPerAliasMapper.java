package cn.com.nantian.mapper;

import cn.com.nantian.pojo.NtPerAlias;
import cn.com.nantian.pojo.NtPerAliasExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NtPerAliasMapper {
    int countByExample(NtPerAliasExample example);

    int deleteByExample(NtPerAliasExample example);

    int insert(NtPerAlias record);

    int insertSelective(NtPerAlias record);

    List<NtPerAlias> selectByExample(NtPerAliasExample example);

    int updateByExampleSelective(@Param("record") NtPerAlias record, @Param("example") NtPerAliasExample example);

    int updateByExample(@Param("record") NtPerAlias record, @Param("example") NtPerAliasExample example);
}