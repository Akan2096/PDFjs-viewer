import { Component,OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pdfjs-viewer';

  @ViewChild('pdfViewer', { static: true }) public pdfViewer: any;

  constructor(private http: HttpClient){

  }
  private downloadFile(url: string): any {
    return this.http.get(url, { responseType: 'blob' })
        .pipe(
            map((result: any) => {
                return result;
            })
        );
   }

   ngOnInit(){

    let url = "https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf";
    this.downloadFile(url).subscribe(
    (res:any) => {
        this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
      }
    );
  }




}
