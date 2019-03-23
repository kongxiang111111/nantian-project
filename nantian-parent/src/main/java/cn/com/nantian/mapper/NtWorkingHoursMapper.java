package cn.com.nantian.mapper;

import cn.com.nantian.pojo.NtWorkingHours;
import cn.com.nantian.pojo.NtWorkingHoursExample;
import cn.com.nantian.pojo.NtWorkingHoursKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NtWorkingHoursMapper {
    int countByExample(NtWorkingHoursExample example);

    int deleteByExample(NtWorkingHoursExample example);

    int deleteByPrimaryKey(NtWorkingHoursKey key);

    int insert(NtWorkingHours record);

    int insertSelective(NtWorkingHours record);

    List<NtWorkingHours> selectByExample(NtWorkingHoursExample example);

    NtWorkingHours selectByPrimaryKey(NtWorkingHoursKey key);

    int updateByExampleSelective(@Param("record") NtWorkingHours record, @Param("example") NtWorkingHoursExample example);

    int updateByExample(@Param("record") NtWorkingHours record, @Param("example") NtWorkingHoursExample example);

    int updateByPrimaryKeySelective(NtWorkingHours record);

    int updateByPrimaryKey(NtWorkingHours record);
}