import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { Veiculo } from 'src/app/model/veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit{

  tipoVeiculos : TipoVeiculo[] = [];
  veiculo! : Veiculo;

  constructor(
    private tipoVeiculoService : TipoVeiculoService,
    private veiculoService: VeiculoService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.tipoVeiculoService.read().subscribe((tipoVeiculos) => {
      this.tipoVeiculos = tipoVeiculos;
    });
    this.veiculoService.readById(id).subscribe((veiculo) => {
      this.veiculo = veiculo;
    })
  }

  updateVeiculo(){
    this.veiculoService.update(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('Veículo alterado com sucesso', false);
      this.router.navigate(['/veiculos']);
    })
  }

  cancel(){
    this.router.navigate(['/veiculos']);
  }

}
