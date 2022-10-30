package com.vue.service;

import java.util.List;

import com.vue.domain.Notice;

public interface NoticeService {


    public int getSearchListCount(String index, String search_word);

    public List<Notice> getSearchList(String index, String search_word, int page, int limit);

}
