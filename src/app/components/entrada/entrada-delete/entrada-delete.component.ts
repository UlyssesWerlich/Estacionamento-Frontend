import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradaResponse } from 'src/app/model/entrada-response.model';
import { EntradaService } from 'src/app/service/entrada.service';

@Component({
  selector: 'app-entrada-delete',
  templateUrl: './entrada-delete.component.html',
  styleUrls: ['./entrada-delete.component.css']
})
export class EntradaDeleteComponent implements OnInit {

  entrada!: EntradaResponse;

  constructor( 
    private entradaService: EntradaService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.entradaService.readById(id).subscribe(entrada => {
      this.entrada = entrada;
    })
  }

  deleteEntrada(): void {
    const id = this.entrada.id!;
    this.entradaService.delete(id).subscribe(() => {
      this.entradaService.showMessage('Entrada excluída com sucesso');
    });
    this.router.navigate(['/entradas']);
  }

  cancel(): void {
    this.router.navigate(['/entradas']);
  }

}
