import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    telefone: '',
    celular: '',
    email: '',
  }

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente;
    })
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente alterado!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
