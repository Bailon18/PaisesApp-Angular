import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

// aqui se exporta un componente para ser utilizado en las demas

@NgModule({
  declarations: [
    SidebarComponent
  ],
  
  exports: [
    SidebarComponent
  ],

  imports: [
    CommonModule,
    RouterModule, // routing
  ]
})
export class SharedModule { }
