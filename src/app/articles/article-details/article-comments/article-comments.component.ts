import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss'],
})
export class ArticleCommentsComponent implements OnInit {
  isWritingComment: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleWritingComment() {
    this.isWritingComment = !this.isWritingComment;
  }
}
