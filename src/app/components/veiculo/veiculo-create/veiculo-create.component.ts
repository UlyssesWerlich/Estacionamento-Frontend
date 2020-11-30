import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { Veiculo } from 'src/app/model/veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  tipoVeiculos: TipoVeiculo[] = [];

  veiculo: Veiculo = {
    placa: '',
    cor: '',
    modelo: '',
    tipoVeiculoId: ''
  }


  constructor(
    private veiculoService: VeiculoService,
    private tipoVeiculoService: TipoVeiculoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tipoVeiculoService.read().subscribe( tipoVeiculos =>{
      this.tipoVeiculos = tipoVeiculos;
    })
  }

  createVeiculo(){
    this.veiculoService.create(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage("Veículo cadastrado com sucesso", false);
      this.router.navigate(['/veiculos']);
    })
  }

  cancel(){
    this.router.navigate(['/veiculos']);
  }
}
