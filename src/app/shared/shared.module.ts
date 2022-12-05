import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
