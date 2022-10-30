package com.vue.controller;

import java.io.File;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.vue.domain.Board;
import com.vue.service.BoardService;

@RestController
public class BoardController {

	private static final Logger Logger = LoggerFactory.getLogger(BoardController.class);

	private BoardService boardService;

	@Autowired
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}
	
	/* 아래 부분 추가해야 합니다 .*/
	
	//my.savefolder = c:/upload
	@Value("${my.savefolder}")
	private String saveFolder;
	
	@GetMapping(value = "/boards")
	public Map<String, Object> boardListAjax(
			@RequestParam(value = "page", defaultValue = "1", required = false) int page,
			@RequestParam(value = "limit", defaultValue = "10", required = false) int limit) {
		int listcount = boardService.getListCount(); // 총 리스트 수를 받아옴
		// 총 페이지 수
		int maxpage = (listcount + limit - 1) / limit;
		
		//만약 maxpage가 2이고 page도 2인 경우
		//2페이지의 목록의 수가 한 개인 상태에서 남은 항목 한개를 삭제한 경우
		//maxpage = 1이 되고 page=2가 됩니다. 이런 경우 page는 maxpage로 수정합니다.
		if(page>maxpage)
			page=maxpage;
		
		// 현재 페이지에 보여줄 시작 페이지 수 (1, 11, 21 등...)
		int startpage = ((page - 1) / 10) * 10 + 1;
		// 현재 페이지에 보여줄 마지막 페이지 수 (10, 20, 30 등...)
		int endpage = startpage + 10 - 1;

		if (endpage > maxpage)
			endpage = maxpage;

		List<Board> boardlist = boardService.getBoardList(page, limit); // 리스트를 받아옴

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("page", page);
		map.put("maxpage", maxpage);
		map.put("startpage", startpage);
		map.put("endpage", endpage);
		map.put("listcount", listcount);
		map.put("boardlist", boardlist);
		map.put("limit", limit);
		return map;
	}
	
	//글쓰기
	@PostMapping(value="/boards/new")
	public String boardsnew(Board board) throws Exception {
		
		MultipartFile uploadfile = board.getUploadfile();
		
		if (uploadfile!=null && !uploadfile.isEmpty()) {
			String fileName = uploadfile.getOriginalFilename(); // 원래 파일명
			board.setBOARD_ORIGINAL(fileName); // 원래 파일명 저장
			
			//c:/upload 생성합니다.
			//이전에는 직접 폴더를 생성했다면 지금은 File의 mkdir()로 폴더를 생성합니다.
			Logger.info(saveFolder);
			File file = new File(saveFolder);
			if(!file.exists()) {
				if(file.mkdir()) {
					Logger.info("폴더 생성");
				}else {
					Logger.info("폴더 생성 실패");
				}
			}else {
				Logger.info("폴더 존재");
			}
			String fileDBName = fileDBName(fileName, saveFolder);
			Logger.info("fileDBName = " + fileDBName);

			// transferTo(File path) : 업로드한 파일을 매개변수의 경로에 저장합니다.
			uploadfile.transferTo(new File(saveFolder + fileDBName));

			// 바뀐 파일명으로 저장
			board.setBOARD_FILE(fileDBName);
		}
		
		boardService.insertBoard(board); // 저장 메서드 호출
		
		return "success";
	}
	
	
	
	// 글쓰기
	@GetMapping(value = "/write") /// board/write
	// @RequestMapping(value="/write", method=RequestMethod.GET)
	public String board_write() {
		return "board/board_write";
	}

	/*
	 * 스프링 컨테이너는 매개변수Board객체를 생성하고 Board객체의 setter 메서드들을 호출하여 사용자 입력값을 설정합니다. 매개변수의
	 * 이름과 setter의 property가 일치하면 됩니다.
	 */
	@PostMapping("/add")
	// @Request Mapping (value="/add", method=RequestMethod.POST)
	public String add(Board board, HttpServletRequest request) throws Exception {

		MultipartFile uploadfile = board.getUploadfile();

		if (!uploadfile.isEmpty()) {
			String fileName = uploadfile.getOriginalFilename(); // 원래 파일명
			board.setBOARD_ORIGINAL(fileName); // 원래 파일명 저장
			String saveFolder = request.getSession().getServletContext().getRealPath("resources") + "/upload";
			String fileDBName = fileDBName(fileName, saveFolder);
			Logger.info("fileDBName = " + fileDBName);

			// transferTo(File path) : 업로드한 파일을 매개변수의 경로에 저장합니다.
			uploadfile.transferTo(new File(saveFolder + fileDBName));
			Logger.info("transferTo path = " + saveFolder + fileDBName);
			// 바뀐 파일명으로 저장
			board.setBOARD_FILE(fileDBName);
		}

		boardService.insertBoard(board); // 저장 메서드 호출
		Logger.info(board.toString());// selectKey로 정의한 BAORD_NUM 값 확인해 봅니다.
		return "redirect:list";

	}

	private String fileDBName(String fileName, String saveFolder) {
		// 새로운 폴더 이름 : 오늘 년+월+일
		Calendar c = Calendar.getInstance();
		int year = c.get(Calendar.YEAR); // 오늘 년도 구합니다.
		int month = c.get(Calendar.MONTH) + 1; // 오늘 월 구합니다.
		int date = c.get(Calendar.DATE); // 오늘 일 구합니다.

		String homedir = saveFolder + "/" + year + "-" + month + "-" + date;
		Logger.info(homedir);
		File path1 = new File(homedir);
		if (!(path1.exists())) {
			path1.mkdir(); // 새로운 폴더를 생성
		}
		// 난수를 구합니다.
		Random r = new Random();
		int random = r.nextInt(100000000);

		/**** 확장자 구하기 시작 ****/
		int index = fileName.lastIndexOf(".");
		// 문자열에서 특정 문자열의 위치 값(index)를 반환합니다.
		// indexOf가 처음 발견되는 문자열에 대한 index를 반환하는 반면,
		// lastIndexOf는 마지막으로 발견되는 문자열의 index를 반환합니다.
		// (파일명에 점에 여러개 있을 경우 맨 마지막에 발견되는 문자열의 위치를 리턴합니다.)
		Logger.info("index = " + index);

		String fileExtension = fileName.substring(index + 1);
		Logger.info("fileExtension = " + fileExtension);
		/*** 확장자 구하기 끝 ***/

		// 새로운 파일명
		String refileName = "bbs" + year + month + date + random + "." + fileExtension;
		Logger.info("refileName = " + refileName);

		// 오라클 디비에 저장될 파일 명
		// String fileDBName = "/" + year + "-" + month + "-" + date + "/" + refileName;
		String fileDBName = File.separator + year + "-" + month + "-" + date + File.separator + refileName;
		Logger.info("fileDBName = " + fileDBName);
		return fileDBName;
	}

	// 게시판에 사용될 정보 구하기
	@GetMapping(value = "/boards/{num}")
	public Map<String, Object> detailajax(@PathVariable(value = "num") int num){
			Board board = boardService.getDetail(num);
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("board", board);
			return map;
	}
	
	//게시판 수정처리하기
	@PatchMapping("/boards")
	public String BoardModifyAction(
		Board boarddata,
		@RequestParam(value="check", defaultValue="", required=false)String check
		) throws Exception{
		
			boolean usercheck
			 =boardService.isBoardWriter(boarddata.getBOARD_NUM(),boarddata.getBOARD_PASS());
			String message = "";
			
			//비밀번호가 다른 경우
			if(usercheck == false) {
				return "Nopass";
			}
			
			MultipartFile uploadfile = boarddata.getUploadfile();
			
			if(check != null && !check.equals("")) {//기존 파일 그대로 사용하는 경우입니다.
				Logger.info("기존파일 그대로 사용합니다."+check);
				boarddata.setBOARD_ORIGINAL(check);
			}else {
				//파일 변경한 경우
				if(uploadfile!=null && !uploadfile.isEmpty()) {
					Logger.info("파일 변경되었습니다.");

					String fileName = uploadfile.getOriginalFilename(); // 원래 파일명
					boarddata.setBOARD_ORIGINAL(fileName); // 원래 파일명 저장
					
					String fileDBName = fileDBName(fileName, saveFolder);

					// transferTo(File path) : 업로드한 파일을 매개변수의 경로에 저장합니다.
					uploadfile.transferTo(new File(saveFolder + fileDBName));

					// 바뀐 파일명으로 저장
					boarddata.setBOARD_FILE(fileDBName);
					
				}else { //기존 파일이 없는데 파일 선택하지 않은 경우 또는 기존 파일이 있었는데 삭제한 경우
					Logger.info("선택 파일 없습니다.");
					boarddata.setBOARD_FILE(""); //""로 초기화합니다.
					boarddata.setBOARD_ORIGINAL("");
				}
			}//else end
			
			// DAO에서 수정 메서드 호출하여 수정합니다.
			int result = boardService.boardModify(boarddata);
			// 수정에 실패한 경우
			if(result == 0) {
				message="fail";
			}else { // 수정 성공의 경우
				Logger.info("게시판 수정 완료");
				message="success";
			}
			return message;	
					
	}
		
	
	//게시물 삭제
	@DeleteMapping(value = "/boards/{num}")
	public int deleteajax(@PathVariable int num,
			String password) {
		//글 삭제 명령을 요청한 사용자가 글을 작성한 사용자인지 판단하기 위해
		//입력한 비밀번호와 저장된 비밀번호를 비교하여 일치하면 삭제합니다.
		Logger.info("비밀번호=" + password);
		Logger.info("글번호="+num);
		boolean usercheck = boardService.isBoardWriter(num, password);

		//비밀번호가 다른 경우
		if(usercheck == false) {
			return 0;
		}
		//비밀번호 일치하는 경우 삭제 처리 합니다.
		int result = boardService.boardDelete(num);
		
		if(result == 0) {
			Logger.info("게시판 삭제 실패");
			return -1;
		}
		
		// 삭제 처리 성공한 경우 - 글 목록 보기 요청을 전송하는 부분입니다.
		Logger.info("게시판 삭제 성공");
		return 1;
	}
	
	// 답변 달기
	@PostMapping("/boards/reply/new")
	public String BoardReplyajax(Board board) { //form으로 보낼시 @RequestBody 안붙인다 
		int result = boardService.boardReply(board); 
		if(result == 0) {
			return "fail";
		}else {
			return "success";
		}

	}
	
	
	
	
	
	
	
	@GetMapping(value = "/detail")
	public ModelAndView detail(int num, ModelAndView mv, HttpServletRequest request,
			@RequestHeader(value = "referer") String beforeURL)
	// String beforeURL = request.getHeader("referer");의미로
	// 어느 주소에서 detail로 이동했는지 header의 정보 중에서 "referer"를 통해 알 수 있습니다.
	{
		Logger.info("referer:" + beforeURL);
		if (beforeURL.endsWith("list")) {
			boardService.setReadCountUpdate(num);
		}

		Board board = boardService.getDetail(num);
		// board=null; //error 페이지 이동 확인하고자 임의로 지정합니다.
		if (board == null) {
			Logger.info("상세보기 실패");
			mv.setViewName("error/error");
			mv.addObject("url", request.getRequestURL());
			mv.addObject("message", "상세보기 실패입니다.");
		} else {
			Logger.info("상세보기 성공");
			mv.setViewName("board/board_view");
			mv.addObject("boarddata", board);
		}
		return mv;
	}
	
	@GetMapping(value = "/modifyView") 
	public ModelAndView modifyView(int num, 
			ModelAndView mv,
			HttpServletRequest request) {
		Board boarddata = boardService.getDetail(num);
		
		//글 내용 불러오기 실패한 경우 입니다.
		if(boarddata == null) {
			Logger.info("수정보기 실패");
			mv.setViewName("error/error");
			mv.addObject("url",request.getRequestURL());
			mv.addObject("message","수정보기 실패입니다.");
			return mv;
		}
		Logger.info("(수정)상세보기 성공");
		//수정 폼 페이지로 이동할때 원문글 내용을 보여주기 때문에 boarddata객체를
		// ModelAndView 객체에 저장합니다.
		//글 수정 폼 페이지로 이동하기 위해 경로를 설정합니다.
		mv.setViewName("board/board_modify");
		mv.addObject("boarddata", boarddata);
		return mv;
	}
	
	@PostMapping("/modifyAction")
	public String modifyAction(
			Board boarddata,
			String check, Model mv,
			HttpServletRequest request,
			RedirectAttributes rattr
			) throws Exception {
		boolean usercheck = 
		boardService.isBoardWriter(boarddata.getBOARD_NUM(), boarddata.getBOARD_PASS());
		String url="";
		//비밀번호가 다른 경우
		if(usercheck == false) {
			rattr.addFlashAttribute("result","passFail");
			rattr.addAttribute("num",boarddata.getBOARD_NUM());
			return "redirect:modifyView";
		}
		
		MultipartFile uploadfile = boarddata.getUploadfile();
		String saveFolder = request.getSession().getServletContext().getRealPath("resources")
				+ "/upload";
		
		if (check != null && !check.equals("")) { //기존파일 그대로 사용하는 경우입니다.
			Logger.info("기존파일 그대로 사용합니다.");
			boarddata.setBOARD_ORIGINAL(check);
			//<input type="hidden" name="BOARD_FILE" value="${boarddata.BOARD_FILE}">
			//위 문장 때문에 board.setBOARD_FILE()값은 자동 저장됩니다.
		}else {
			//답변글의 경우 파일 첨부에 대한 기능이 없습니다.
			//만약 답변글을 수정할 경우
			//<input type="file" id="upfile" name="uploadfile">엘리먼트가 존재하지 않아
			//private MultipartFile uploadfile;에서 uploadfile은 null입니다.
			if(uploadfile!=null && uploadfile.isEmpty()) {
				Logger.info("파일 변경되었습니다.");
				
				String fileName = uploadfile.getOriginalFilename(); // 원래 파일명
				boarddata.setBOARD_ORIGINAL(fileName); // 원래 파일명 저장
				
				String fileDBName = fileDBName(fileName, saveFolder);
				Logger.info("fileDBName = " + fileDBName);
				// transferTo(File path) : 업로드한 파일을 매개변수의 경로에 저장합니다.
				uploadfile.transferTo(new File(saveFolder + fileDBName));
				Logger.info("transferTo path = " + saveFolder + fileDBName);
				// 바뀐 파일명으로 저장
				boarddata.setBOARD_FILE(fileDBName);
				
			}else { //기존 파일이 없는데 파일 선택하지 않은 경우 또는 기존 파일이 있었는데 삭제한 경우
				Logger.info("선택 파일 없습니다.");
				//<input type="hidden" name="BOARD_FILE" value="${boarddata.BOARD_FILE}">
				//위 태그에 값이 있다면 ""로 값을 변경합니다.
				boarddata.setBOARD_FILE(""); //""로 초기화합니다.
				boarddata.setBOARD_ORIGINAL("");
			}
		}//else end
		
		// DAO에서 수정 메서드 호출하여 수정합니다.
		int result = boardService.boardModify(boarddata);
		// 수정에 실패한 경우
		if(result == 0) {
			Logger.info("게시판 수정 실패");
			mv.addAttribute("url",request.getRequestURL());
			mv.addAttribute("message","게시판 수정 실패");
			url="error/error";
		}else { // 수정 성공의 경우
			Logger.info("게시판 수정 완료");
			// 수정한 글 내용을 보여주기 위해 글 내용 보기 보기 페이지로 이동하기위해 경로를 설정합니다.
			url = "redirect:detail";
			rattr.addAttribute("num",boarddata.getBOARD_NUM());
		}
		return url;
	}
	
	@GetMapping(value = "/replyView")
	public ModelAndView replyView(int num, ModelAndView mv, 
								  HttpServletRequest request) {

		Board board = boardService.getDetail(num);
		if (board == null) {
			mv.setViewName("error/error");
			mv.addObject("url", request.getRequestURL());
			mv.addObject("message", "게시판 답변글 가져오기 실패");
		} else {
			mv.addObject("boarddata", board);
			mv.setViewName("board/board_reply");
		}
		return mv;
	}
	
	@PostMapping("/replyAction")
	public ModelAndView BoardReplyAction(Board board, ModelAndView mv,
			HttpServletRequest request, RedirectAttributes rattr) {
		
		int result = boardService.boardReply(board); 
		if (result == 0) {
			mv.setViewName("error/error");
			mv.addObject("url", request.getRequestURL());
			mv.addObject("message", "게시판 답변 처리 실패");
		} else {
			mv.addObject("num", board.getBOARD_NUM());
			mv.setViewName("redirect:detail");
		}
		return mv;

	}
	
	@PostMapping("/delete")
	public String delete(String BOARD_PASS, int num,
						 Model mv, HttpServletRequest request,
						 RedirectAttributes rattr) {
		//글 삭제 명령을 요청한 사용자가 글을 작성한 사용자인지 판단하기 위해
		//입력한 비밀번호와 저장된 비밀번호를 비교하여 일치하면 삭제합니다.
		boolean usercheck = 
		boardService.isBoardWriter(num, BOARD_PASS);

		//비밀번호가 다른 경우
		if(usercheck == false) {
			rattr.addFlashAttribute("result","passFail");
			rattr.addAttribute("num",num);
			return "redirect:detail";
		}
		
		//비밀번호 일치하는 경우 삭제 처리 합니다.
		int result = boardService.boardDelete(num);
		
		//삭제 처리 실패한 경우
		if(result == 0) {
			Logger.info("게시판 삭제 실패");
			mv.addAttribute("url",request.getRequestURL());
			mv.addAttribute("message", "게시판 삭제 실패");
			return "error/error";
		}
		//삭제 처리 성공한 경우 - 글 목록 보기 요청을 전송하는 부분입니다.
		Logger.info("게시판 삭제 성공");
		rattr.addFlashAttribute("result","deleteSuccess");
		return "redirect:list";
	}
	
	
	@GetMapping("/boards/down")
	public byte[] BoardFileDown(String filename, String original,
			HttpServletResponse response) throws Exception{
		
		String sFilePath = saveFolder + filename;
		Logger.info(sFilePath);
		File file = new File(sFilePath);
		byte[] bytes = FileCopyUtils.copyToByteArray(file);
		
		String sEncoding = new String(original.getBytes("utf-8"),"ISO-8859-1");
		
		//Content-Disposition: attachment:브라우저는 해당 Content를 처리하지않고 다운로드하게됩니다.
		response.setHeader("Content-Disposition", "attachment;filename="+sEncoding);
		
		response.setContentLength(bytes.length);
		return bytes;
	}
	
	@ResponseBody
	@PostMapping("/down")
	public byte[] BoardFileDown(String filename,
								HttpServletRequest request,
								String original,
								HttpServletResponse response)throws Exception{
		String savePath = "resources/upload";
		//서블릿의 실행 환경 정보를 담고 있는 객체를 리턴합니다.
		ServletContext context = request.getSession().getServletContext();
		String sDownloadPath = context.getRealPath(savePath);
		
		String sFilePath = sDownloadPath + filename;
		
		File file = new File(sFilePath);
		
		byte[] bytes = FileCopyUtils.copyToByteArray(file);
		
		String sEncoding = new String(original.getBytes("utf-8"),"ISO-8859-1");
		
		//Content-Disposition: attachment:브라우저는 해당 Content를 처리하지않고 다운로드하게됩니다.
		response.setHeader("Content-Disposition", "attachment;filename="+sEncoding);
		
		response.setContentLength(bytes.length);
		return bytes;
	}
}
