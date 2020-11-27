import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente;
    })
  }

  deleteCliente(): void {
    const id = this.cliente.id!;
    this.clienteService.delete(id).subscribe(() => {
      this.clienteService.showMessage('Cliente excluido com sucesso')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
