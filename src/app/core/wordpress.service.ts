import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPost } from './../post.model';


const POSTS_URL = 'posts';
//  const api_URL = WORDPRESS_REST_URL;

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  posts: IPost[] =[];
  posts$: Subject<IPost> = new Subject();

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    if(this.posts){
      return of(this.posts)
    }
    return this.http.get<IPost[]>('http://localhost/staging/wp-json/wp/v2/posts')
    .pipe(tap(
      (posts) => this.posts = posts
    ));

  }
  getPost(id: number){
    if(this.posts){
      const post = this.posts.find(
        p => p.id === id
      );
      if(post){
        this.posts$.next(post);
      }
    }
    this.http.get<IPost>('${environment.WORDPRESS_REST_URL}${POSTS_URL}/${id}')
      .subscribe(post => this.posts$.next(post));
    console.log(this.posts)
  }
}
