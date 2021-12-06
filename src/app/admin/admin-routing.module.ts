import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AdminAdminsListComponent } from './admin-admins-list/admin-admins-list.component';
import { AdminArticleDetailsComponent } from './admin-article-details/admin-article-details.component';
import { AdminArticlesListComponent } from './admin-articles-list/admin-articles-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UnpublishedArticlesComponent } from './unpublished-articles/unpublished-articles.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminWelcomeComponent,
      },
      {
        path: 'articles-list',
        component: AdminArticlesListComponent,
      },
      {
        path: 'unpublished-articles',
        component: UnpublishedArticlesComponent,
      },
      {
        path: 'article-details/:id',
        component: AdminArticleDetailsComponent,
      },
      {
        path: 'start-writing',
        component: CreateArticleComponent,
      },
      {
        path: 'users-list',
        component: AdminUsersListComponent,
      },
      {
        path: 'admins-list',
        component: AdminAdminsListComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
