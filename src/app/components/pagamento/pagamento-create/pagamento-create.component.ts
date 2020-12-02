import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagamentoRequest } from 'src/app/model/pagamento-request.model';
import { Pagamento } from 'src/app/model/pagamento.model';
import { PagamentoService } from 'src/app/service/pagamento.service';

@Component({
  selector: 'app-pagamento-create',
  templateUrl: './pagamento-create.component.html',
  styleUrls: ['./pagamento-create.component.css']
})
export class PagamentoCreateComponent implements OnInit {

  pagamentoRequest : PagamentoRequest = {
    valorPagamento : 0
  };

  pagamento: Pagamento = {
    entradaId : 0,
    valorTotalEntrada : 0,
    valorPagamento : 0, 
    quantidadeIntervaloDeTempo : 0,
    tempoEstacionamento : 0,
  }

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private pagamentoService : PagamentoService
  ) { }

  ngOnInit(): void {

    const entradaId = Number.parseInt(this.route.snapshot.paramMap.get('idEntrada')!);
    this.pagamentoService.readByIdEntrada(entradaId).subscribe( pagamento => {
      this.pagamento = pagamento;
    })
    this.pagamentoRequest.valorPagamento = 0;
  }

  createPagamento() : void {
    this.pagamentoService.create(this.pagamento.entradaId, this.pagamentoRequest).subscribe(() => {
      this.pagamentoService.showMessage('Pagamento feito com sucesso', false);
      this.router.navigate(['/entradas']);
    })
  }

  cancel() : void {
    this.router.navigate(['/entradas']);
  }
}
