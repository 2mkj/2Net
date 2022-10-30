package com.vue.service;

import java.util.List;

import com.vue.domain.Member;

public interface MemberService {

	public int insert(Member m);

	public int isId(String id);

	public Member member_info(String id);

	public int delete(String id);

	public int update(Member m);

	public List<Member> getSearchList(String index, String search_word, int page, int limit);

	public int getSearchListCount(String index, String search_word);

	public int isId(String id, String password);

	public Member FindPass(String id, String name);

}
