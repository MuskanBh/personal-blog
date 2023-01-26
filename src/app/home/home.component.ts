import { Component, OnInit } from '@angular/core';
//import { WordpressService } from './../core/wordpress.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // posts$= this.wordpressService.getPosts();
  post: any;
  apiUrl='http://localhost/staging/wp-json/wp/v2/posts'

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get(this.apiUrl)
    .subscribe((data)=> this.post = data);
  }
}
