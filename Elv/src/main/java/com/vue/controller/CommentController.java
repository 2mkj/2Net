package com.vue.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vue.domain.Comment;
import com.vue.service.BoardService;
import com.vue.service.CommentService;

@RestController //@Controller + @ResponseBody
public class CommentController {
	
	private static final Logger Logger = LoggerFactory.getLogger(BoardController.class);

	
	private CommentService commentService;

	@Autowired
	public CommentController(BoardService boardService, CommentService commentService) {
		this.commentService = commentService;
	}
	/* @ResponseBody와 jackson을 이용하여 JSON 사용하기 
	 
	 */
	
	@GetMapping(value = "/comments")
	public Map<String,Object> CommentList
			(@RequestParam int board_num, 
			@RequestParam int page){
		List<Comment> list = commentService.getCommentList(board_num, page);
		int listcount = commentService.getListCount(board_num);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("list", list);
		map.put("listcount", listcount);
		return map;
	}
	
	@PostMapping(value="/comments/new")
	public int CommentAdd(@RequestBody Comment co) {
		return commentService.commentsInsert(co);
	}
	
	@PatchMapping(value="/comments")
	public int CommentUpdate(@RequestBody Comment co) {
		return commentService.commentsUpdate(co);
	}
	
	@DeleteMapping(value="/comments/{num}")
	public int CommentDelete(@PathVariable int num) {
		return commentService.commentsDelete(num);
	}
}
