import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class CommonComponentModule { }
