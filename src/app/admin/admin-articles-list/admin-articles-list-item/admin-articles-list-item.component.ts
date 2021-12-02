import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-admin-articles-list-item',
  templateUrl: './admin-articles-list-item.component.html',
  styleUrls: ['./admin-articles-list-item.component.scss'],
})
export class AdminArticlesListItemComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit(): void {}
}
