import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaRequest } from 'src/app/model/entrada-request.model';
import { EntradaService } from 'src/app/service/entrada.service';

@Component({
  selector: 'app-entrada-create',
  templateUrl: './entrada-create.component.html',
  styleUrls: ['./entrada-create.component.css']
})
export class EntradaCreateComponent implements OnInit {

  entrada: EntradaRequest = {
    clienteId : 0,
    veiculoId : 0,
  };

  constructor(
    private entradaService: EntradaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createEntrada(){
    this.entradaService.create(this.entrada).subscribe(() => {
      this.entradaService.showMessage('Entrada criada com sucesso', false);
      this.router.navigate(['/entradas']);
    })
  }

  cancel(){
    this.router.navigate(['/entradas']);
  }

}
