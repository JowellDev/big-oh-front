import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/articles/articles.service';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-unpublished-articles',
  templateUrl: './unpublished-articles.component.html',
  styleUrls: ['./unpublished-articles.component.scss'],
})
export class UnpublishedArticlesComponent implements OnInit {
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
      .getUnpublishedArticles()
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
