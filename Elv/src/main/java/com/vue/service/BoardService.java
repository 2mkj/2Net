package com.vue.service;

import java.util.List;

import com.vue.domain.Board;

public interface BoardService {

	// 글의 갯수 구하기
	public int getListCount();

	// 글 목록 보기
	public List<Board> getBoardList(int page, int limit);
	
	// 글 내용 보기
	public Board getDetail(int num);
	
    //BOARD_RE_SEQ값 수정
	public int boardReplyUpdate(Board board);
	
	// 글 답변
	public int boardReply(Board board);

	// 글 수정
	public int boardModify(Board modifyboard);

	// 글 삭제
	public int boardDelete(int num);

	// 조회수 업데이트
	public int setReadCountUpdate(int num);
	
	//글쓴이인지 확인
	public boolean isBoardWriter(int num, String pass);
	
	// 글 등록하기
	public void insertBoard(Board board) ;
	
	// 삭제 데이터 목록
	public List<String> getDeleteFileList();
	
	// 데이터 삭제 
	public void deleteFileList(String filename);


}
