import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/model/pagamento.model';
import { PagamentoService } from 'src/app/service/pagamento.service';

@Component({
  selector: 'app-pagamento-read',
  templateUrl: './pagamento-read.component.html',
  styleUrls: ['./pagamento-read.component.css']
})
export class PagamentoReadComponent implements OnInit {

  pagamento : Pagamento = {
    entradaId : 0,
    valorPagamento : 0,
    valorTotalEntrada : 0,
    quantidadeIntervaloDeTempo : 0,
    tempoEstacionamento : 0,
  };
  idPagamento! : number;

  constructor ( 
    private pagamentoService : PagamentoService
  ) { }

  ngOnInit(): void {}

  findById(): void{
    this.pagamentoService.readById(this.idPagamento).subscribe(pagamento =>{
      this.pagamento = pagamento;
    })
  }
}
