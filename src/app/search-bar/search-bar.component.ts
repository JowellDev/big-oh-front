import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
