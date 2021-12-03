import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  message: string = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      this.articleService.getArticle(this.articleId).subscribe((article) => {
        this.article = article;
      });
    });
  }

  republier() {
    this.articleService
      .publishOrUnpublish(this.articleId)
      .subscribe((article: Article) => {
        this.article.published_at = article.published_at;
        this.message = 'Action éffectuée avec succès !';
      });
  }

  publishOrUnpublish() {
    this.article.is_published = !this.article.is_published;
    this.articleService.publishOrUnpublish(this.articleId).subscribe(() => {
      this.message = 'Action éffectuée avec succès !';
    });
  }

  delete() {
    this.articleService.deleteArticle(this.articleId).subscribe();
    this.router.navigate(['/admin/dashboard/articles-list']);
  }

  closeAlert() {
    this.message = null;
  }
}
