import { Component } from "@angular/core";
import { DataService, Post } from "../data.service";


@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private data: DataService) {
    this.data.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
