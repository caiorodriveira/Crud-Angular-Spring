import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [ //modulos-module
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
