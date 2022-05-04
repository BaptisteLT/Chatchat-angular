import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-randomcat',
  templateUrl: './randomcat.component.html',
  styleUrls: ['./randomcat.component.css']
})
export class RandomcatComponent implements OnInit {


  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    //let request = {};
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.thecatapi.com/v1/images/search'/*, request*/).subscribe(data => {
      var img = document.createElement("img");  
      img.height=500;
      img.src=data[0].url;

      var imageWrapper = document.getElementById('imageWrapper');
      
      if(imageWrapper && typeof(imageWrapper)!==null)
      {
        imageWrapper.innerHTML='';
        imageWrapper.append(img);
      }
      
    })
    
  }

}
