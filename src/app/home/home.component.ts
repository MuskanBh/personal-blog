import { Component, OnInit } from '@angular/core';
//import { WordpressService } from './../core/wordpress.service';
import { WordpressService } from '../core/wordpress.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // posts$= this.wordpressService.getPosts();
  post= this.wordpressService.getPosts();
  apiUrl='http://localhost/staging/wp-json/wp/v2/posts'

  constructor(private wordpressService: WordpressService){

  }
  ngOnInit(): void {
    // this.post = this.wordpressService.getPosts();
  }
}
