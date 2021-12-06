import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminAdminsListComponent } from './admin-admins-list/admin-admins-list.component';
import { AdminArticleDetailsComponent } from './admin-article-details/admin-article-details.component';
import { AdminArticlesListItemComponent } from './admin-articles-list/admin-articles-list-item/admin-articles-list-item.component';
import { AdminArticlesListComponent } from './admin-articles-list/admin-articles-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminComponent } from './admin.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UnpublishedArticlesComponent } from './unpublished-articles/unpublished-articles.component';
import { ShareModule } from '../share.module';

@NgModule({
  declarations: [
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
    CreateArticleComponent,
    UnpublishedArticlesComponent,
    AdminArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    CKEditorModule,
    FormsModule,
    AdminRoutingModule,
    ShareModule,
  ],
})
export class AdminModule {}
