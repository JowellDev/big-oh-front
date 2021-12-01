import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Article } from '../shared/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[] = [];
  articlesChanged = new Subject<Article[]>();
  baseUrl: string = 'http://localhost:3000/articles/';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(this.baseUrl);
  }

  getArticle(id: string) {
    return this.http.get<Article>(this.baseUrl + id);
  }

  fullTextSearch(keyword: string) {
    const opts = { params: new HttpParams().set('keyword', keyword) };
    return this.http.get<Article[]>(this.baseUrl + 'search', opts).pipe(
      map((articles) => {
        if (!articles) return [];
        this.articlesChanged.next(articles);
        return articles;
      })
    );
  }

  filterByCategory(category: string) {
    const opts = { params: new HttpParams().set('category', category) };
    return this.http.get<Article[]>(this.baseUrl + 'filter', opts).pipe(
      map((articles) => {
        if (!articles) return [];
        this.articlesChanged.next(articles);
        return articles;
      })
    );
  }
}
