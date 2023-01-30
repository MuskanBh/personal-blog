import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from './../core/wordpress.service';

@Component({
  selector: 'pb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post : any;
  constructor(private route: ActivatedRoute, private wordpressService: WordpressService){
    // this.wordpressService.posts.subscribe((data)=> this.post= data)
  }
  ngOnInit(): void {
      // this.route.params.subscribe((params)=> this.wordpressService.getPost(params.id))
  }
}
