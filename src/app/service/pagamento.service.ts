import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PagamentoRequest } from '../model/pagamento-request.model';
import { Pagamento } from '../model/pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  baseUrl = "http://localhost:8080/pagamentos";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  create(idEntrada: number, pagamento: PagamentoRequest): Observable<Pagamento> {

    const url = `${this.baseUrl}/${idEntrada}`;
    return this.http.post<Pagamento>(url, pagamento).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readByIdEntrada(idEntrada: number): Observable<Pagamento> {
    const url = `${this.baseUrl}/${idEntrada}`;
    return this.http.get<Pagamento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Pagamento> {
    const url = `${this.baseUrl}/consultar/${id}`
    return this.http.get<Pagamento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
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
