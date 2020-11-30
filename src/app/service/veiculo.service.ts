import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Veiculo } from '../model/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = 'http://localhost:8080/veiculos';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { };


  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.baseUrl, veiculo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Veiculo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Veiculo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readByPlaca(placa: string): Observable<Veiculo> {
    const url = `${this.baseUrl}/placa?placa=${placa}`;
    return this.http.get<Veiculo[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseUrl}/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Veiculo>(url).pipe(
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
