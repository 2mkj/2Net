package com.vue.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ErrorProcess implements ErrorController {
	private static final Logger logger = LoggerFactory.getLogger(ErrorProcess.class);
	
	@GetMapping(value="/error")
	public String goIndex() {
		logger.info("error");
		return "index.html";
	}
}
