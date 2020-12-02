import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EntradaRequest } from '../model/entrada-request.model';
import { EntradaResponse } from '../model/entrada-response.model';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  baseUrl = "http://localhost:8080/entradas";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  create(entrada: EntradaRequest): Observable<EntradaResponse> {
    return this.http.post<EntradaRequest>(this.baseUrl, entrada).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<EntradaResponse[]> {
    return this.http.get<EntradaResponse[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<EntradaResponse> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<EntradaResponse>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readByNome(nome: string): Observable<EntradaResponse[]> {
    const url = `${this.baseUrl}/nome?nome=${nome}`;

    return this.http.get<EntradaResponse[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<EntradaRequest>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(`Ocorreu um erro! ${e.error.titulo}`, true);
    var mensagens = Array.of(e.error.mensagens);

    mensagens.forEach(mensagem => {
      this.showMessage(`Mensagem ${mensagem} \n`, true);
    });
    return EMPTY;
  }
}
