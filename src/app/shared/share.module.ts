import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [SearchBarComponent, AlertComponent],
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  exports: [
    SearchBarComponent,
    AlertComponent,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class ShareModule {}
