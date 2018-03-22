import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  _baseUrl: string;
  http: any;
  url: any;
  constructor() { }

  ngOnInit() {
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  downloadFile(id): Observable<Blob> {
    let options = new RequestOptions({responseType: ResponseContentType.Blob });
    return this.http.get(this._baseUrl + '/' + id, options)
        .map(res => res.blob())
        .catch(this.handleError)
}
  
    
}
