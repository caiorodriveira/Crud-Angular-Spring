import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './../model/curso';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  private readonly API = '/api/cursos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(//tratamento de erros
      first(),
      // delay(5000),
      tap(cursos => console.log(cursos))
    );
  }
}
