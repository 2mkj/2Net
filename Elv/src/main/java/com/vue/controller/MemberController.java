package com.vue.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.vue.domain.Member;
import com.vue.service.MemberService;

@RestController
public class MemberController {
	private static final Logger Logger = LoggerFactory.getLogger(MemberController.class);

	private MemberService memberservice;
	
	@Autowired
	public MemberController (MemberService memberservice) {
		this.memberservice = memberservice;
	}
	
	
	@RequestMapping(value = "/members/logout", method = RequestMethod.POST)
	public String loginout(HttpSession session) {
		session.invalidate();
		return "logout success";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(ModelAndView mv, 
					@CookieValue(value = "remember-me", required = false) Cookie readCookie,
					HttpSession session,
					Principal userPrincipal) {

		if (readCookie != null) {
			Logger.info("저장된 아이디" + userPrincipal.getName());
			mv.setViewName("redirect:/board/list");
		}else {
		mv.setViewName("member/member_loginForm");
		mv.addObject("loginfail",session.getAttribute("loginfail"));//세션에 저장된 값을 한번만 실행할 수 있도록
		session.removeAttribute("loginfail");//세션의 값은 제거합니다.
		}
		return mv;
	}

	//로그인 처리
	@PostMapping(value="/members")
	public int loginProcess(@RequestBody Member member,
			HttpSession session) {
		
		String id = member.getId();
		String password = member.getPassword();
		int result = memberservice.isId(id, password);
		Logger.info("결과: "+result);
		if(result == 1) {
			//로그인 성공
			session.setAttribute("id", id);
		}
		return result;
	}
	
	// 회원가입폼에서 아이디 검사
	@GetMapping(value="/members/idcheck")
	public int idcheck(String id) throws Exception {
		Logger.info("idcheck");
		return memberservice.isId(id);
	}
	
	// 회원가입처리
	@PostMapping(value="/members/new")
	public int joinProcess(@RequestBody Member member) {
		return memberservice.insert(member);
	}
	
	@RequestMapping(value = "/loginProcess", method = RequestMethod.POST)
	public String loginProcess(
			@RequestParam("id") String id,
			@RequestParam("pass") String password,
			@RequestParam(value ="remember", defaultValue="", required = false)
			String remember,
			HttpServletResponse response,
			HttpSession session,
			RedirectAttributes rattr) {
		int result = memberservice.isId(id,password);
		Logger.info("결과 : "+result);
		
		if(result ==1) {
			//로그인 성공
			session.setAttribute("id",id);
			Cookie savecookie = new Cookie("saveid",id);
			if(!remember.equals("")) {
				savecookie.setMaxAge(60*60);
				Logger.info("쿠키저장 : 60*60");
			}else {
				Logger.info("쿠키저장 : 0");
				savecookie.setMaxAge(0);
			}
			response.addCookie(savecookie);
			return "redirect:/board/list";
		}else {
			rattr.addFlashAttribute("result",result);
			return "redirect:login";
		}
	}
	
	//비밀번호 찾기
		@PostMapping(value="/forgot")
		public Member forgot(@RequestBody Member member) {
			String id = member.getId();
			String name = member.getName();
			Member result = memberservice.FindPass(id, name);
			return result;
		}
	
	//수정할 정보 갖고오기
	@RequestMapping(value="/members/{id}", method = RequestMethod.GET)
	public Member member_infoajax(@PathVariable String id) {
		Logger.info("id="+id);
		return memberservice.member_info(id);
	}
	
	
	@PutMapping(value = "/members")
	public int updateajax(@RequestBody Member m){
		return memberservice.update(m);
	}
	
	@DeleteMapping(value="/members/{id}")
	public int member_delete1(@PathVariable String id) {
		return memberservice.delete(id);
	}
	
	
	
	
	
	
	@GetMapping(value = "/members")
	public Map<String,Object> memberList(
			@RequestParam(value="page",defaultValue="1",required = false)int page,
			@RequestParam(value="limit",defaultValue="3",required=false)int limit,
			@RequestParam(value="search_word",defaultValue="",required=false)String search_word,
			@RequestParam(value="search_field",defaultValue="",required=false)String index
			) {
		
		List<Member> list = null;
		int listcount = 0;
		
		listcount = memberservice.getSearchListCount(index, search_word); // 총 리스트 수를 받아옴
		
		int maxpage = (listcount + limit - 1) / limit; // 총 페이지 수
		if (page > maxpage) page = maxpage;
		
		list = memberservice.getSearchList(index,search_word,page,limit); // 리스트를 받아옴
		
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
		map.put("memberlist", list);
		return map;
	}
	
	
}
