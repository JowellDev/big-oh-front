import { AdminModule } from './admin/admin.module';
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
import { FooterComponent } from './footer/footer.component';
import { ArticleContentComponent } from './articles/article-details/article-content/article-content.component';
import { ArticleDescriptionComponent } from './articles/article-details/article-description/article-description.component';
import { ArticleCommentsComponent } from './articles/article-details/article-comments/article-comments.component';
import { ArticleCommentsCardComponent } from './articles/article-details/article-comments/article-comments-card/article-comments-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ShareModule } from './share.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    ArticlesListItemComponent,
    FooterComponent,
    ArticleContentComponent,
    ArticleDescriptionComponent,
    ArticleCommentsComponent,
    ArticleCommentsCardComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ShareModule,
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
