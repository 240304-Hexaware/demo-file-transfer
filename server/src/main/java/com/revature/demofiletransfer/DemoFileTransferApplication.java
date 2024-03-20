package com.revature.demofiletransfer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@SpringBootApplication(scanBasePackages = {"com.revature.demofiletransfer.controllers"})
public class DemoFileTransferApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(DemoFileTransferApplication.class, args);



//		File path = new File("test");
//		File file = new File("test\\document.txt");
//		path.mkdir();
//		FileWriter fileWriter = new FileWriter(file);
//		fileWriter.append("Hello!");
//		fileWriter.close();

	}



}