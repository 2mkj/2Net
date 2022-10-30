package com;

import org.springframework.boot.SpringApplication;

public class Vue1Application설명 {

	public static void main(String[] args) {
		SpringApplication.run(Vue1Application설명.class, args);
	}
/*
 * CORS (Cross-origin resource sharing)
 1. 웹 페이지의 제한된 자원을 외부 도메인에서 접근을 허용해주는 메커니즘입니다.

 2. origin이란 URL 구조에서 protocol, host, port를 합친 것을 의미합니다.

 3. 예) http://localhost:8088/vue/login
		프로토콜://host:포트번호/경로
		
		http://localhost:8081/경로 에서 http://localhost:8088/경로를 호출하면
		origin이 다르게 때문에
		브라우저에서는 동일 출처 정책 (Same Origin Policy)에 의해 오류가 발생합니다.

 4. 위 문제를 해결하기 위한 설정 방법
	(1) 각 컨트롤러에서 설정
		@CrossOrigin (origins="http://localhost:8081")

	(2) 환경설정 파일에 설정
		예) WebMvcConfig.java에서

	@Override
	public void addCorsMappings(CorsRegistry registry){
	 registry.addMapping("/**")
	 .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") 
	 .allowedOrigins("http://localhost:8081");
	}
  
 */
}
