import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Page {
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
  postedContent: Page[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pages: Page[];

  constructor(private _http: HttpClient) {
    this.pages = [
      {
        contentId: 1,
        title: 'Toast is the best!',
        body: 'I like toast.',
        createdAt: new Date(),
        updatedAt: new Date(),
        visibility: 0,
        categoryId: 0,
        category: {
          categoryId: 0,
          categoryName: 'Toast',
          postedContent: []
        }
      },
      {
        contentId: 2,
        title: 'Taco is the best!',
        body: 'I like tacos.',
        createdAt: new Date(),
        updatedAt: new Date(),
        visibility: 0,
        categoryId: 1,
        category: {
          categoryId: 1,
          categoryName: 'Taco',
          postedContent: []
        }
      },
      {
        contentId: 3,
        title: 'Hello World is the best!',
        body: 'I like Hello World.',
        createdAt: new Date(),
        updatedAt: new Date(),
        visibility: 0,
        categoryId: 3,
        category: {
          categoryId: 3,
          categoryName: 'HelloWorld',
          postedContent: []
        }
      },
      {
        contentId: 4,
        title: 'Hello World Hello World Hello World!',
        body: 'I like Hello World.',
        createdAt: new Date(),
        updatedAt: new Date(),
        visibility: 0,
        categoryId: 3,
        category: {
          categoryId: 3,
          categoryName: 'HelloWorld',
          postedContent: []
        }
      }
    ];
  }

  getAllPages(): Observable<Page[]> {
    return this._http.get<Page[]>('/api/contents');
  }

  getPageById(id: number): Observable<Page> {
    return this._http.get<Page>('/api/contents/' + id);
  }

  createPage(page: Page): Observable<Page> {
    return this._http.post<Page>('/api/contents', page);
  }

  updatePage(page: Page): Observable<Page> {
    return this._http.put<Page>('/api/contents/' + page.contentId, page);
  }

  deletePageById(id: number): Observable<any> {
    return this._http.delete<any>('/api/contents/' + id);
  }

  deletePage(page: Page): Observable<any> {
    return this._http.delete<any>('/api/contents/' + page.contentId);
  }
}
