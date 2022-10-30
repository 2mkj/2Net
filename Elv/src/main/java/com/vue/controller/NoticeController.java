package com.vue.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vue.domain.Member;
import com.vue.domain.Notice;
import com.vue.service.NoticeService;

@RestController
public class NoticeController {

	private static final Logger log = LoggerFactory.getLogger(NoticeController.class);

	private NoticeService noticeService;

	@Autowired
	public NoticeController(NoticeService noticeService) {
		this.noticeService = noticeService;
	}
	
	/* 아래 부분 추가해야 합니다 .*/
	
	//my.savefolder = c:/upload
	@Value("${my.savefolder}")
	private String saveFolder;
	
	@GetMapping(value = "/notices")
    public Map<String,Object> memberList(
            @RequestParam(value="page",defaultValue="1",required = false)int page,
            @RequestParam(value="limit",defaultValue="5",required=false)int limit,
            @RequestParam(value="search_word",defaultValue="",required=false)String search_word,
            @RequestParam(value="search_field",defaultValue="",required=false)String index
            ) {
	    
	    
	    List<Notice> list = null;
        int listcount = 0;
        
        listcount = noticeService.getSearchListCount(index, search_word); // 총 리스트 수를 받아옴
        
        int maxpage = (listcount + limit - 1) / limit; // 총 페이지 수
        if (page > maxpage) page = maxpage;
        
        list = noticeService.getSearchList(index,search_word,page,limit); // 리스트를 받아옴

        int startpage = ((page - 1) / 10) * 10 + 1;
        int endpage = startpage + 10 - 1;
        if (endpage > maxpage) endpage = maxpage;
        
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("page", page);
        map.put("maxpage", maxpage);
        map.put("startpage", startpage);
        map.put("endpage", endpage);
        map.put("listcount", listcount);
        map.put("search_field", index);
        map.put("search_word", search_word);
        map.put("noticelist", list);
        return map;
	    
	}
	
}
