import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticlesService } from 'src/app/articles/articles.service';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-admin-article-details',
  templateUrl: './admin-article-details.component.html',
  styleUrls: ['./admin-article-details.component.scss'],
})
export class AdminArticleDetailsComponent implements OnInit {
  article: Article;
  articleId: string;
  constructor(
    private router: ActivatedRoute,
    private articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      this.articleService.getArticle(this.articleId).subscribe((article) => {
        this.article = article;
      });
    });
  }
}
