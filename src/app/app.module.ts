import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
