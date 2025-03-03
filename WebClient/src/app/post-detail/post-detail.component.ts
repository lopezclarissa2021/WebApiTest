import { Component, OnInit } from '@angular/core';
import { DataService, Page } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  id: number = 0;
  post: Page | undefined;

  constructor(private data: DataService,
    private route: ActivatedRoute,
    private router: Router) {

    this.id = 0;
    this.post = {
      contentId: 0,
      title: "",
      body: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 0,
      category: {
        categoryId: 0,
        categoryName: '',
        postedContent: []
      },
      visibility: 0
    };
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.post = this.data.pages.find(p => p.contentId == this.id);

      this.data.getPageById(this.id).subscribe(page => {
        this.post = page;

      });

    });

   
  }


}
