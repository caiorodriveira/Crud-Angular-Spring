import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Curso } from './../model/curso';


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
  save(registro: Curso){ //registro = this.formularo.value
    return this.httpClient.post<Curso>(this.API, registro)
  }
}
