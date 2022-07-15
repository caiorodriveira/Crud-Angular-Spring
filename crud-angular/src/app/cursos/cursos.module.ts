import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';//imports do cursos
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursoFormComponent } from './curso-form/curso-form.component';//importando pasta de modulos criados para material

@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class CursosModule { }
