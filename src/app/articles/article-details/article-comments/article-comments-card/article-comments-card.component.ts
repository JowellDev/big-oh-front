import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/comment.model';

@Component({
  selector: 'app-article-comments-card',
  templateUrl: './article-comments-card.component.html',
  styleUrls: ['./article-comments-card.component.scss'],
})
export class ArticleCommentsCardComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit(): void {}
}
