package com.revature.demofiletransfer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.revature.demofiletransfer.controllers"})
public class DemoFileTransferApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoFileTransferApplication.class, args);
	}

}