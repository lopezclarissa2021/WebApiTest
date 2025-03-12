import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';

export interface Post {
  contentId: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  visibility: number;
  categoryId: number;
  category: Category;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  postedContent: Post[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  selectedPost$: BehaviorSubject<Post | undefined> = new BehaviorSubject<Post | undefined>(undefined);

  constructor(private _http: HttpClient) {
  }

  selectPost(id: number): void {
    // find the post by id
    // check if post exists
    // if exists trigger selectedPost$.next(the post)
    // else trigger selectedPost$.next(undefined)
  }

  getAllPosts(): void {
    this._http.get<Post[]>('/api/contents').pipe(
      tap(x => {
        console.log('Fired getAllPosts with the following object');
      }),
      delay(1000)
    ).subscribe(data => {
      this.posts$.next(data);
    })
  }

  getPostById(id: number): void {
    this._http.get<Post>('/api/contents/' + id).pipe(
      tap(x => {
        console.log('Fired getPostById with the following object', x);
      }),
      delay(1000)
    ).subscribe((data: Post) => { // next
      console.log("getPostById returned success", data)
      this.selectedPost$.next(data);
    }, (err) => { // err
      this.selectedPost$.next(undefined);
    }, () => {
      console.log("getPostById Complete")
    });
  }

  createPost(post: Post): void {
    this._http.post<Post>('/api/contents/', post).subscribe(data => {
      this.getAllPosts();
    });
  }

  updatePost(id: number, post: Post): void {
    this._http.put<Post>('/api/contents/' + id, post).subscribe(data => {
      this.getAllPosts();
    });
  }

  deletePostById(id: number): void {
    this._http.delete<any>('/api/contents/' + id).pipe(
      tap(x => {
        console.log("deleting post by id");
      })
    ).subscribe(result => {
      this.getAllPosts();
    });
  }

  deletePost(post: Post): void {
    this.deletePostById(post.contentId);
  }
}
