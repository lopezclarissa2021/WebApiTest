import { Component } from '@angular/core';
import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-post-item',
  standalone: false,
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})

export class PostListComponent {
  posts: Post[] = [];
  constructor(private data: DataService) {
    this.data.getAllPosts().subscribe(data => {
      this.posts = data;
    })

  }
}
