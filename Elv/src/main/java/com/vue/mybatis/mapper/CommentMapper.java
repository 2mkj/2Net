package com.vue.mybatis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vue.domain.Comment;

@Mapper
public interface CommentMapper {
	// 글의 갯수 구하기
	public int getListCount(int board_num);

	// 댓글 목록 가져오기
	public List<Comment> getCommentList(Map<String, Integer> map);

	// 댓글 등록하기
	public int commentsInsert(Comment c);

	// 댓글 삭제
	public int commentsDelete(int num);

	// 댓글 수정
	public int commentsUpdate(Comment co);
}
