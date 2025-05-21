import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, ToolbarComponent],
})
export class SharedModule {}