import { Component, OnInit } from '@angular/core';
import { WordpressService } from './../core/wordpress.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  posts$= this.wordPressService.getPosts();

  constructor(private wordPressService: WordpressService){

  }
  ngOnInit(): void {
      console.log(this.posts$)
  }
}
