import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsModelComponent } from './models/project-details/project-details-model.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    LoadingComponent,
    CarouselComponent,
    ProjectDetailsModelComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    LoadingComponent,
    CarouselComponent,
    ProjectDetailsModelComponent
  ]
})
export class CommonComponentModule { }
