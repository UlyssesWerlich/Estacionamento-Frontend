import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cliente } from '../model/cliente.model';
import { TipoVeiculo } from '../model/tipo-veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoVeiculoService {

  baseUrl = 'http://localhost:8080/tipo-veiculos';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  create(tipoVeiculo: TipoVeiculo): Observable<TipoVeiculo> {
    return this.http.post<TipoVeiculo>(this.baseUrl, tipoVeiculo).pipe(
      map(obj => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<TipoVeiculo[]> {
    return this.http.get<TipoVeiculo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<TipoVeiculo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(tipoVeiculo: TipoVeiculo): Observable<TipoVeiculo> {
    const url = `${this.baseUrl}/${tipoVeiculo.id}`;
    return this.http.put<Cliente>(url, tipoVeiculo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url).pipe(
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
