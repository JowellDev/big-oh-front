import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from '../../../../app/shared/comment.model';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss'],
})
export class ArticleCommentsComponent implements OnInit {
  @Input() comments: Comment[];
  isWritingComment: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleWritingComment() {
    this.isWritingComment = !this.isWritingComment;
  }

  addComment(form: NgForm) {
    console.log(form.value.comment);
  }
}
