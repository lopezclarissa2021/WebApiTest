import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-edit',
  standalone: false,
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css'
})
export class PostEditComponent implements OnInit {
  id: number = 0;
  post: Post = {
    contentId: 0,
    title: 'Taco',
    body: '',
    createdAt: new Date(),
    updatedAt: new Date,
    visibility: 0,
    categoryId: 0,
    category: {
      categoryId: 0,
      categoryName: '',
      postedContent: []
    }
  }
  isLoaded: boolean = false;
  isEditing: boolean = false;

  postForm: FormGroup = new FormGroup({});

  constructor(private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {

    this.data.selectedPost$.subscribe(selectedPost => {
      if (selectedPost == undefined) {
        console.log("selected post fired in post-edit");
        this.initEmptyForm();
      } else {
        this.initForm(selectedPost);
      }
    });



  }

  initForm(postData: Post) {
    this.post = postData;

    this.postForm = this.fb.group({
      contentId: [postData.contentId],
      title: [postData.title],
      body: [postData.body],
      createdAt: [postData.createdAt],
      updatedAt: [new Date()],
      visibility: [postData.visibility],
      categoryId: [postData.categoryId],
      category: this.fb.group({
        categoryId: [postData.category.categoryId],
        categoryName: [postData.category.categoryName],
        postedContent: this.fb.array(postData.category.postedContent)
      })
    });

    this.isEditing = true;
    this.isLoaded = true;
  }

  initEmptyForm() {
    this.postForm = this.fb.group({
      contentId: [0],
      title: ['Taco'],
      body: ['Lorem Ipsum'],
      createdAt: [new Date()],
      updatedAt: [new Date()],
      visibility: [0],
      categoryId: [0],
      category: this.fb.group({
        categoryId: [0],
        categoryName: [''],
        postedContent: this.fb.array([])
      })
    });

    this.isEditing = false;
    this.isLoaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      if (this.id > 0) {
        this.data.getPostById(this.id);
      }
    });
  }

  loadForm() {
    this.postForm.patchValue({
      contentId: this.post.contentId,
      title: this.post.title,
      body: this.post.body,
      createdAt: this.post.createdAt,
      updatedAt: this.post.updatedAt,
      visibility: this.post.visibility,
      categoryId: this.post.categoryId,
      category: this.post.category
    });
  }

  onSave() {
    // take the formgroup, read the values, and then submit them to the data service
    console.log(this.postForm.value);

    let savedPost: Post = {
      contentId: this.postForm.value.contentId,
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      createdAt: this.postForm.value.createdAt,
      updatedAt: this.postForm.value.updatedAt,
      visibility: Number(this.postForm.value.visibility),
      categoryId: this.postForm.value.categoryId,
      category: this.postForm.value.category
    }

    if (this.isEditing) {
      this.data.updatePost(this.post.contentId, savedPost);
      this.router.navigate(['post', this.id]);
    } else {
      this.data.createPost(savedPost)
      //this.router.navigate(['post', contentId]);
      this.router.navigate(['post']);
    }
  }

  onClear() {
    // reset the formgroup
  }
}
