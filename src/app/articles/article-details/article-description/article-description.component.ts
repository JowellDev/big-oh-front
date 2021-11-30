import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../app/shared/article.model';

@Component({
  selector: 'app-article-description',
  templateUrl: './article-description.component.html',
  styleUrls: ['./article-description.component.scss'],
})
export class ArticleDescriptionComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit(): void {}
}
