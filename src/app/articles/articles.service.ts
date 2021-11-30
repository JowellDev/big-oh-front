import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Article[]>(this.baseUrl).pipe(
      map((articles) => {
        if (!articles) return [];
        return (
          articles &&
          articles.map((article) => {
            return { ...article };
          })
        );
      }),
      tap((articles) => {
        this.articles = articles;
      })
    );
  }

  getArticle(id: string) {
    return this.http.get<Article>(this.baseUrl + id).pipe(
      map((article) => {
        return { ...article };
      })
    );
  }
}
