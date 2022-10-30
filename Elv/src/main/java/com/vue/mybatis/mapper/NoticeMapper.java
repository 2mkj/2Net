package com.vue.mybatis.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.vue.domain.Notice;

@Mapper
public interface NoticeMapper {


    public int getSearchListCount(HashMap<String, Object> map);

    public List<Notice> getSearchList(HashMap<String, Object> map);
	
}
