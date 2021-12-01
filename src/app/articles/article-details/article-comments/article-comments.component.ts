import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/shared/article.model';
import { User } from 'src/app/shared/user.model';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss'],
})
export class ArticleCommentsComponent implements OnInit {
  @Input() article: Article;
  isWritingComment: boolean = false;

  constructor(
    private articleService: ArticlesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.articleService.articleChanged.subscribe((article) => {
      this.article = article;
    });
  }

  toggleWritingComment() {
    this.isWritingComment = !this.isWritingComment;
  }

  addComment(form: NgForm) {
    this.articleService
      .commentArticle(this.article.id, form.value.comment)
      .subscribe();

    form.reset();
  }

  likeArticle() {
    this.articleService.likeArticle(this.article.id).subscribe();
  }
}
