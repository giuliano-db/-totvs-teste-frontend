
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Pessoa } from './pessoa';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    private baseURL = "http://localhost:8080/pessoas";

    constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        alert(error.error.message)
      } else {
        alert(" Erro no Campo "+error.error.errors[0].fieldName+" : "+error.error.errors[0].message)
      }
      return throwError('Erro');
  }

    getPessoasList(): Observable<Pessoa[]> {
        return this.httpClient.get<Pessoa[]>(`${this.baseURL}`) 
           .pipe(catchError(this.handleError)
    );
    }

    createPessoa(pessoa: Pessoa): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, pessoa)
           .pipe(catchError(this.handleError));
    }

    getPessoaById(id: number): Observable<Pessoa> {
        return this.httpClient.get<Pessoa>(`${this.baseURL}/${id}`)
         .pipe(catchError(this.handleError));
    }

    updatePessoa(id: number, pessoa: Pessoa): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}/${id}`, pessoa)
         .pipe(catchError(this.handleError));
    }

    deletePessoa(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`)
         .pipe(catchError(this.handleError));
    }
 
}
