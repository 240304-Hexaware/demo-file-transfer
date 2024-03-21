import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

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
  downloadFile: Blob | undefined;

  constructor(httpClient: HttpClient) {
    /* the HttpClient needs to be provided, see app.config.ts */
    this.httpClient = httpClient;
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
    //I don't know why intellisense thinks we can't do this, but it gives an error, try it out.
    // let options = {
    //   observe: "response",
    //   responseType: 'text',
    //   headers: new HttpHeaders({
    //     username: "kplummer"//for our trusting system
    //   })
    // }

    let url = "http://localhost:8080/file"

    let form: FormData = new FormData();
    form.append("file", this.file);
    
    let options: Object = {
      observe: "response",
      responseType: 'text',
      headers: new HttpHeaders({
        username: "kplummer"//for our trusting system
      })
    }
    
    let response = this.httpClient.post(url, form, options);


    response.subscribe({
      next: (data: any) => {
        console.log("data: ", data);
        let fileName: string | null = "file.txt"; 
        let fileBody: string | null = data.body;
        this.downloadFile = new Blob([fileBody as string], {type: "text/plain"});
      },
      error: (error: HttpErrorResponse) => {
        console.log("error: ", error);
        alert(error.message);
      },
      complete: () => {
        console.log("Http response complete!")
      }
    });
  }

  saveFile() {
    if(this.downloadFile == undefined) {
      alert("No file to download!");
      return;
    }

    const linkElement = document.createElement("a");
    linkElement.href = URL.createObjectURL(this.downloadFile);
    linkElement.download = "download.file";
    linkElement.click();
    linkElement.remove();
  }
}
