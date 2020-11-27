import { Component, OnInit } from '@angular/core';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';

@Component({
  selector: 'app-tipo-veiculo-read',
  templateUrl: './tipo-veiculo-read.component.html',
  styleUrls: ['./tipo-veiculo-read.component.css']
})
export class TipoVeiculoReadComponent implements OnInit {

  tipoVeiculos: TipoVeiculo[] = [];
  displayedColumns = ['id', 'nome', 'preco', 'action']

  constructor(
    private tipoVeiculoService: TipoVeiculoService
  ) { }

  ngOnInit(): void {
    this.tipoVeiculoService.read().subscribe(tipoVeiculos => {
      this.tipoVeiculos = tipoVeiculos;
    })
  }

}
