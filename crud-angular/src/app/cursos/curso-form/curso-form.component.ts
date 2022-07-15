import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private construtorForm: FormBuilder
    ){
      this.formulario = this.construtorForm.group({
        nome: [null],
        categoria:[null],
      })
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }
  onCancel() {
    
  }
}
