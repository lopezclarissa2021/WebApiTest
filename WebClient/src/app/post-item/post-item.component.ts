import { Component } from '@angular/core';
import { DataService, Page } from '../data.service';

@Component({
  selector: 'app-post-item',
  standalone: false,
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})

export class PostListComponent {
  pages: Page[] = [];
  constructor(private data: DataService) {
    this.data.getAllPages().subscribe(data => {
      this.pages = data;
    })

  }
}
