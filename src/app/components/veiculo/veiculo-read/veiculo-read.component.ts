import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/model/veiculo.model';
import { VeiculoService } from 'src/app/service/veiculo.service';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculos: Veiculo[] = [];
  placa: string = '';
  displayedColumns = ['id', 'placa', 'cor', 'modelo', 'tipoVeiculo', 'action']

  constructor( private veiculoService: VeiculoService ) {}

  ngOnInit(): void {
    this.veiculoService.read().subscribe(veiculos =>{
      this.veiculos = veiculos;
    })
  }

  findByPlaca(): void {
    if(this.placa.length < 7){
      this.ngOnInit();
    } else {
      this.veiculoService.readByPlaca(this.placa).subscribe(veiculo =>{
        this.veiculos = Array.of(veiculo);
      })
    }
  }
}
