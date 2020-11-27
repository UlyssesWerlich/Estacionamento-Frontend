import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { TipoVeiculo } from 'src/app/model/tipo-veiculo.model';
import { TipoVeiculoService } from 'src/app/service/tipo-veiculo.service';

@Component({
  selector: 'app-tipo-veiculo-delete',
  templateUrl: './tipo-veiculo-delete.component.html',
  styleUrls: ['./tipo-veiculo-delete.component.css']
})
export class TipoVeiculoDeleteComponent implements OnInit {

  tipoVeiculo!: TipoVeiculo;

  constructor(
    private tipoVeiculoService: TipoVeiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var id  = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.tipoVeiculoService.readById(id).subscribe(tipoVeiculo => {
      this.tipoVeiculo = tipoVeiculo;
    })
  }

  deleteTipoVeiculo(): void {
    const id = this.tipoVeiculo.id!;
    this.tipoVeiculoService.delete(id).subscribe(() => {
      this.tipoVeiculoService.showMessage('Categoria de veículo excluido com sucesso!', false);
      this.router.navigate(['/tipo-veiculos']);
    })
  }

  cancel(): void {
    this.router.navigate(['/tipo-veiculos']);
  }
}
