import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo.model';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent implements OnInit {

  veiculo!: Veiculo;

  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.veiculoService.readById(id).subscribe((veiculo) => {
      this.veiculo = veiculo;
    });
  }

  deleteCliente(){
    this.veiculoService.delete(this.veiculo.id!).subscribe(() => {
      this.veiculoService.showMessage('Veículo excluído com sucesso', false);
      this.router.navigate(['/veiculos']);
    });
  }

  cancel(){
    this.router.navigate(['/veiculos']);
  }
}
