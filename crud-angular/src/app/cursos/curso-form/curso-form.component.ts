import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private construtorForm: FormBuilder,
    public service: CursosService,
    private snackBar: MatSnackBar,
    private location: Location, //location do pacote angular commom | confirma se importou
  ) {
    this.formulario = this.construtorForm.group({
      nome: [null],
      categoria: [null],
    });
  }

  ngOnInit(): void {}

  private onError() { //método que exibe o snackBar
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000 });
  }
  private onSucess() {
    this.snackBar.open('Curso Salvo com sucesso!', '', { duration: 2000 });
    this.location.back();
  }

  onSubmit() {
    this.service.save(this.formulario.value)
    .subscribe((result) => this.onSucess(),error =>  this.onError());//subscribe pra se increver
  }

  onCancel() {
    this.location.back();
  }

}
