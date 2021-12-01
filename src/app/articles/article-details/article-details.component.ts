import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/shared/article.model';
import { User } from 'src/app/shared/user.model';
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
  user: User;
  isLiked: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private articlesService: ArticlesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.index = params['id'];
    });

    this.authService.user.subscribe((user) => {
      this.user = user;
    });

    this.subscription = this.articlesService
      .getArticle(this.index)
      .subscribe((article: Article) => {
        this.article = article;
        this.isLiked = !!this.article.likers.find(
          (liker) => liker.user_email === this.user.email
        );
      });

    this.articlesService.articleChanged.subscribe((article) => {
      this.article = article;
      this.isLiked = !!this.article.likers.find(
        (liker) => liker.user_email === this.user.email
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
