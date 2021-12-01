import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../shared/article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  articles: Article[] = [];
  isLoading: boolean = false;
  paginationCurrentPage: number = 1;
  pageItems: number = 6;
  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.articlesChanged.subscribe((articles) => {
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
