import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  httpClient: HttpClient;
  file: File | undefined;

  constructor(httpClient: HttpClient) {
    /* the HttpClient needs to be provided, see app.config.ts */
    this.httpClient = httpClient;
    this.file = undefined;
  }

  fileSelected(event: any) {
    this.file = event.target.files[0];
    console.log("File selected: ", event.target.files[0])
  }

  upload() {
    if(this.file == undefined) {
      alert("No file selected!");
      return;
    }

    let form: FormData = new FormData();
    form.append("file", this.file);
    let response = this.httpClient.post("http://localhost:8080/file", form, {
      observe: "response",
      responseType: 'text',
      headers: {
        username: "kplummer"//for our trusting system
      }
    });
    response.subscribe({
      next: (data) => {console.log("data: ", data)},
      error: (error: HttpErrorResponse) => {
        console.log("error: ", error)
      }
    });
  }

  saveFile() {
    let fileName = "test.file";
    let fileBody = "This is a test";

    const file = new Blob([fileBody], {type: "text/plain"});

    const linkElement = document.createElement("a");
  }
}
