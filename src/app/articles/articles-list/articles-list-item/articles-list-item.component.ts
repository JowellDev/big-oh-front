import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/user.model';
import { Article } from '../../../shared/article.model';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss'],
})
export class ArticlesListItemComponent implements OnInit {
  @Input() article: Article;
  user: User;
  isAuth: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuth = user ? true : false;
    });
  }
}
