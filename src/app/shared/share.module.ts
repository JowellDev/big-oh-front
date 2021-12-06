import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  exports: [SearchBarComponent, NgxPaginationModule, FormsModule],
})
export class ShareModule {}
