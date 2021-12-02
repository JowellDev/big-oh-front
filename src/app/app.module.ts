import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticlesListItemComponent } from './articles/articles-list/articles-list-item/articles-list-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { ArticleContentComponent } from './articles/article-details/article-content/article-content.component';
import { ArticleDescriptionComponent } from './articles/article-details/article-description/article-description.component';
import { ArticleCommentsComponent } from './articles/article-details/article-comments/article-comments.component';
import { ArticleCommentsCardComponent } from './articles/article-details/article-comments/article-comments-card/article-comments-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminArticlesListComponent } from './admin/admin-articles-list/admin-articles-list.component';
import { AdminUsersListComponent } from './admin/admin-users-list/admin-users-list.component';
import { AdminAdminsListComponent } from './admin/admin-admins-list/admin-admins-list.component';
import { AdminArticlesListItemComponent } from './admin/admin-articles-list/admin-articles-list-item/admin-articles-list-item.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    ArticlesListItemComponent,
    SearchBarComponent,
    DropdownDirective,
    FooterComponent,
    ArticleContentComponent,
    ArticleDescriptionComponent,
    ArticleCommentsComponent,
    ArticleCommentsCardComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    SidebarComponent,
    AdminNavbarComponent,
    AdminArticlesListComponent,
    AdminUsersListComponent,
    AdminAdminsListComponent,
    AdminArticlesListItemComponent,
    AdminWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
