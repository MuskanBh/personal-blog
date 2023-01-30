import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from './../post.model';


const POSTS_URL = 'posts';
//  const api_URL = WORDPRESS_REST_URL;

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  // posts: IPost[] =[];
  posts$: Subject<IPost> = new Subject();
  posts: any;
  apiUrl='http://localhost/staging/wp-json/wp/v2/posts'
  constructor(private http: HttpClient) { }

  getPosts(){
   this.http.get(this.apiUrl)
    .subscribe((data)=> this.posts = data);
    return this.posts;
  }
  getPost(id: number){
    this.http.get(this.apiUrl)
      .subscribe(post => this.posts.index);
    console.log(this.posts)
  }
}
