import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ShareModule } from '../shared/share.module';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterComponent } from '../register/register.component';
import { ArticleCommentsCardComponent } from './article-details/article-comments/article-comments-card/article-comments-card.component';
import { ArticleCommentsComponent } from './article-details/article-comments/article-comments.component';
import { ArticleContentComponent } from './article-details/article-content/article-content.component';
import { ArticleDescriptionComponent } from './article-details/article-description/article-description.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesListItemComponent } from './articles-list/articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
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
  imports: [CommonModule, ArticlesRoutingModule, FormsModule, ShareModule],
})
export class ArticlesModule {}
