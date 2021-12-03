import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/articles/articles.service';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-admin-articles-list',
  templateUrl: './admin-articles-list.component.html',
  styleUrls: ['./admin-articles-list.component.scss'],
})
export class AdminArticlesListComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  subscription: Subscription;
  paginationCurrentPage: number = 1;
  pageItems: number = 4;
  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.articlesChanged.subscribe((articles: Article[]) => {
      this.articles = articles;
    });
    this.subscription = this.articleService
      .getArticles()
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
