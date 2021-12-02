import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminGuard } from './auth/guards/admin.guard';
import { AdminArticlesListComponent } from './admin/admin-articles-list/admin-articles-list.component';
import { AdminUsersListComponent } from './admin/admin-users-list/admin-users-list.component';
import { AdminAdminsListComponent } from './admin/admin-admins-list/admin-admins-list.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      { path: '', component: ArticlesListComponent },
      {
        path: ':id',
        component: ArticleDetailsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        children: [
          {
            path: '',
            component: AdminWelcomeComponent,
            pathMatch: 'full',
          },
          {
            path: 'articles-list',
            component: AdminArticlesListComponent,
            pathMatch: 'full',
          },
          {
            path: 'users-list',
            component: AdminUsersListComponent,
            pathMatch: 'full',
          },
          {
            path: 'admins-list',
            component: AdminAdminsListComponent,
            pathMatch: 'full',
          },
        ],
        //canActivate: [AdminGuard],
      },
      { path: 'login', component: AdminLoginComponent },
    ],
  },
  { path: '**', redirectTo: 'articles' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
