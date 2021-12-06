import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  {
    path: ':id',
    component: ArticleDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
