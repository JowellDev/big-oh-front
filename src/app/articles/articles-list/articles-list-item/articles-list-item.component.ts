import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../shared/article.model';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit(): void {}
}
