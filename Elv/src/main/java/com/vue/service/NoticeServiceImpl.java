package com.vue.service;


import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.domain.Notice;
import com.vue.mybatis.mapper.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {
    private static final Logger Logger = LoggerFactory.getLogger(NoticeServiceImpl.class);
    
    
	private NoticeMapper dao;
	
	@Autowired
	public NoticeServiceImpl(NoticeMapper dao) {
	    this.dao = dao;
	}
	

    @Override
    public int getSearchListCount(String index, String search_word) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        if(!index.equals("")) {
            String[] search_field=index.split("");
            Logger.info("search_field.length:"+search_field.length);
            for(int i=0;i<search_field.length;i++) {
                Logger.info(search_field[i]);
            }
            map.put("search_field", search_field);
            map.put("search_word","%"+search_word+"%");
        }
        return dao.getSearchListCount(map);
    }


    @Override
    public List<Notice> getSearchList(String index, String search_word, int page, int limit) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        if(!index.equals("")) {
            String[] search_field=index.split("");
            Logger.info("search_field.length:"+search_field.length);
            for(int i=0;i<search_field.length;i++) {
                Logger.info(search_field[i]);
            }
            map.put("search_field", search_field);
            map.put("search_word","%"+search_word+"%");
        }
        int startrow=(page-1)*limit+1;
        int endrow=startrow+limit-1;
        map.put("start", startrow);
        map.put("end", endrow);
        return dao.getSearchList(map);
    }



}
