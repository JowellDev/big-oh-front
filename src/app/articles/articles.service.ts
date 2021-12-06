import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from '../shared/article.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[] = [];
  articlesChanged = new Subject<Article[]>();
  articleChanged = new Subject<Article>();
  messageAlert = new Subject<string>();

  baseUrl: string = `${environment.apiUrl}/articles`;

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(this.baseUrl);
  }

  getUnpublishedArticles() {
    return this.http.get<Article[]>(`${this.baseUrl}/unpublished`);
  }

  getArticle(id: string) {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  fullTextSearch(keyword: string) {
    const opts = { params: new HttpParams().set('keyword', keyword) };
    return this.http.get<Article[]>(`${this.baseUrl}/search`, opts).pipe(
      map((articles) => {
        if (!articles) return [];
        this.articlesChanged.next(articles);
        return articles;
      })
    );
  }

  filterByCategory(category: string) {
    const opts = { params: new HttpParams().set('category', category) };
    return this.http.get<Article[]>(`${this.baseUrl}/filter`, opts).pipe(
      map((articles) => {
        if (!articles) return [];
        this.articlesChanged.next(articles);
        return articles;
      })
    );
  }

  commentArticle(articleId: number, comment: string) {
    const data = { comment };
    return this.http
      .post<Article>(`${this.baseUrl}/${articleId}/comment`, data)
      .pipe(
        map((article) => {
          this.articleChanged.next(article);
        })
      );
  }

  likeArticle(articleId: number) {
    return this.http
      .post<Article>(`${this.baseUrl}/${articleId}/like`, {})
      .pipe(
        map((article) => {
          this.articleChanged.next(article);
        })
      );
  }

  createArticle(body: {
    title: string;
    description: string;
    category: string;
    body: string;
  }) {
    return this.http.post(this.baseUrl, body).pipe(
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      })
    );
  }

  publishOrUnpublish(articleId: string) {
    return this.http.put(`${this.baseUrl}/${articleId}/publish`, {});
  }

  updatePublishDate(articleId: string) {
    return this.http.put(`${this.baseUrl}/${articleId}/republish`, {});
  }

  deleteArticle(articleId: string) {
    return this.http.delete(`${this.baseUrl}/${articleId}`).pipe(
      map((response: { message: string }) => {
        this.messageAlert.next(response.message);
      })
    );
  }
}
