package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin (origins="http://localhost:8081")
@SpringBootApplication
public class Vue1Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Vue1Application.class, args);
	}

}
