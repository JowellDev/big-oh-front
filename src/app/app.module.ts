import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
