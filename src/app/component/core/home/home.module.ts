import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { DirectivesModule } from '../../../directive/directives.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';


@NgModule({
  declarations: [
    MainComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillSectionComponent,
    ExperienceSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,
    NgxTypedJsModule
  ]
})
export class HomeModule { }