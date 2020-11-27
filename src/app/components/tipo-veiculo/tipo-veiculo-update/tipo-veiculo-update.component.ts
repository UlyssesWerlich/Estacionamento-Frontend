import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';

@Component({
  selector: 'app-tipo-veiculo-update',
  templateUrl: './tipo-veiculo-update.component.html',
  styleUrls: ['./tipo-veiculo-update.component.css']
})
export class TipoVeiculoUpdateComponent implements OnInit {

  tipoVeiculo: TipoVeiculo = {
    nome: '',
    preco: 0
  }

  constructor(
    private tipoVeiculoService: TipoVeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {    
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.tipoVeiculoService.readById(id).subscribe(tipoVeiculo => {
      this.tipoVeiculo = tipoVeiculo;
    })
  }

  updateTipoVeiculo(){
    this.tipoVeiculoService.update(this.tipoVeiculo).subscribe(() => {
      this.tipoVeiculoService.showMessage('Categoria de veículo alterada com sucesso', false);
      this.router.navigate(['/tipo-veiculos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/tipo-veiculos'])
  }
}
