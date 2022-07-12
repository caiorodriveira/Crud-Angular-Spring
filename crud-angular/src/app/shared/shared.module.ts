import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';
import { CategoriaPipe } from './pipes/categoria.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe,
  ],
  imports: [ //modulos-module
  CommonModule,
  AppMaterialModule
],
exports: [
  ErrorDialogComponent,
  CategoriaPipe,
  ]
})
export class SharedModule { }
