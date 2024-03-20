package com.revature.demofiletransfer.controllers;

import jdk.jfr.ContentType;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FileController {


    @PostMapping(path = "/file", produces = "text/plain")
    @ResponseStatus(HttpStatus.ACCEPTED)
    //Send this file from postman by clicking "Body" > "form-data"
    //then look for the file drop down (you have to hover over the key/value pairs.
    //Drop it down and select "File" the other choice is "text" which is the default behavior
    //Then just select a file and send it.
    public String uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        InputStreamReader reader = new InputStreamReader(file.getInputStream());
        StringBuilder builder = new StringBuilder();
        while(reader.ready()) {
            builder.append((char)reader.read());
        }
        System.out.println(builder.toString());
        return builder.toString();
        /* Here is some example code of how you might start parsing the JSON in order to understand the flat file
        This is a quick and dirty solution, hardly ideal. See the 3/14 afternoon recording for details ~5:00 PM
        String json =
                "{" +
                "  \"manufacturer\": {" +
                "     \"start\": 0," +
                "     \"end\": 39" +
                "  }" +
                "}";
        int positionOfOpenQuote = json.indexOf("\"");
        String nextBit = json.substring(positionOfOpenQuote + 1);
        int positionOfCloseQuote = nextBit.indexOf("\"");
        json.substring(positionOfOpenQuote+1, positionOfCloseQuote)

         */
    }

}
