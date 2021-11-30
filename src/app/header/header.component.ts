import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories = [
    { id: 'algo', name: 'Algorithmie', color: 'btn-dark' },
    { id: 'web', name: 'Développement web', color: 'btn-warning' },
    { id: 'mobile', name: 'Développement mobile', color: 'btn-success' },
    { id: 'data', name: 'Big data', color: 'btn-danger' },
    { id: 'ia', name: 'Intélligence artificielle', color: 'btn-info' },
    { id: 'bc', name: 'Blockchain', color: 'btn-light' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
