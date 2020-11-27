import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';

@Component({
  selector: 'app-tipo-veiculo-create',
  templateUrl: './tipo-veiculo-create.component.html',
  styleUrls: ['./tipo-veiculo-create.component.css']
})
export class TipoVeiculoCreateComponent implements OnInit {

  tipoVeiculo: TipoVeiculo = {
    nome: '',
    preco: 0
  }

  constructor(
    private tipoVeiculoService: TipoVeiculoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createTipoVeiculo(): void {
    this.tipoVeiculoService.create(this.tipoVeiculo).subscribe(() => {
      this.tipoVeiculoService.showMessage('Categoria de veículo criado com sucesso', false);
      this.router.navigate(['/tipo-veiculos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/tipo-veiculos'])
  }
}
