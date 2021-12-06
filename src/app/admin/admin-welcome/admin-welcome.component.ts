import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/articles/articles.service';
import { Article } from 'src/app/shared/article.model';
import { User } from 'src/app/shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.scss'],
})
export class AdminWelcomeComponent implements OnInit, OnDestroy {
  articlesSub: Subscription;
  usersSub: Subscription;
  adminsSub: Subscription;
  articles: Article[];
  users: User[];
  admins: User[];

  constructor(
    private articlesService: ArticlesService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.articlesSub = this.articlesService
      .getArticles()
      .subscribe((articles: Article[]) => {
        this.articles = articles;
      });

    this.usersSub = this.usersService
      .getAllMembers()
      .subscribe((users: User[]) => {
        this.users = users;
      });

    this.adminsSub = this.usersService
      .getAllAdmins()
      .subscribe((admins: User[]) => {
        this.admins = admins;
      });
  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
    this.usersSub.unsubscribe();
    this.adminsSub.unsubscribe();
  }
}
