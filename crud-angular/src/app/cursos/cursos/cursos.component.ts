import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;

  // cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  // cursosService: CursosService;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog
    ) {
    // this.cursos = [];
    // this.cursosService = new CursosService();

    this.cursos$ = this.cursosService.list()
    .pipe(//tratamento de erros
      catchError(error => {
        this.onError('Erro ao carregar cursos!');
        return of([])
      })
    );

    // this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {}
}
