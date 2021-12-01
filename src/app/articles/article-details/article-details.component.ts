import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  article: Article;
  index: string;
  subscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.index = params['id'];
    });

    this.subscription = this.articlesService
      .getArticle(this.index)
      .subscribe((article: Article) => {
        this.article = article;
      });

    this.articlesService.articleChanged.subscribe((article) => {
      this.article = article;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
