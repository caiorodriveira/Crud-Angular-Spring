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
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.construtorForm.group({
      nome: [null],
      categoria: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.formulario.value)
    .subscribe((result) => console.log(result)//precisa se inscrever
    ,error =>  this.onError());//chama o metodo onError
  }
  onCancel() {}

  private onError() { //método que exibe o snackBar
    this.snackBar.open('Erro ao salvar curso', '', { duration: 3000 });
  }
}
