import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitToDotsPipe } from './LimitToDots/limit-to-dots.pipe';



@NgModule({
  declarations: [
    LimitToDotsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LimitToDotsPipe
  ]
})
export class PipesModule { }
