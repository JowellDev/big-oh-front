import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onSearch(form: NgForm) {
    const keyword = form.value.keyword;
    this.articleService.fullTextSearch(keyword).subscribe();
  }
}
