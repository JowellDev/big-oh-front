import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories = [
    { id: '', name: 'Toutes les categories', color: 'btn-light' },
    { id: 'algo', name: 'Algorithmie', color: 'btn-dark' },
    { id: 'web', name: 'Développement web', color: 'btn-warning' },
    { id: 'mobile', name: 'Développement mobile', color: 'btn-success' },
    { id: 'data', name: 'Big data', color: 'btn-danger' },
    { id: 'ia', name: 'Intélligence artificielle', color: 'btn-info' },
    { id: 'bc', name: 'Blockchain', color: 'btn-light' },
  ];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  filterBy(category: string) {
    this.articleService.filterByCategory(category).subscribe();
  }
}
