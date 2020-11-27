import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = [];
  nome: string = '';
  displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'celular', 'email', 'action']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes;
    })
  }

  findByNome(): void {
    this.clienteService.readByNome(this.nome).subscribe(clientes =>{
      this.clientes = clientes;
    })
  }

}
