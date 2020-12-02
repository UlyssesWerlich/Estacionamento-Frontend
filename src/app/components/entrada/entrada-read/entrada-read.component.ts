import { Component, OnInit } from '@angular/core';
import { EntradaResponse } from 'src/app/model/entrada-response.model';
import { EntradaService } from 'src/app/service/entrada.service';

@Component({
  selector: 'app-entrada-read',
  templateUrl: './entrada-read.component.html',
  styleUrls: ['./entrada-read.component.css']
})
export class EntradaReadComponent implements OnInit {

  entradas: EntradaResponse[] = [];
  displayedColumns = ['id', 'placa', 'cor', 'modelo', 'tipoVeiculo', 'precoPorTipoVeiculo', 
    'nome', 'telefone', 'celular', 'action']

  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
    this.entradaService.read().subscribe(entradas =>{
      this.entradas = entradas;
    })
  }
}
