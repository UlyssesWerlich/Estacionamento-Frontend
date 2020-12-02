import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { EntradaCreateComponent } from './components/entrada/entrada-create/entrada-create.component';
import { EntradaDeleteComponent } from './components/entrada/entrada-delete/entrada-delete.component';
import { PagamentoCreateComponent } from './components/pagamento/pagamento-create/pagamento-create.component';
import { PagamentoReadComponent } from './components/pagamento/pagamento-read/pagamento-read.component';
import { TipoVeiculoCreateComponent } from './components/tipo-veiculo/tipo-veiculo-create/tipo-veiculo-create.component';
import { TipoVeiculoDeleteComponent } from './components/tipo-veiculo/tipo-veiculo-delete/tipo-veiculo-delete.component';
import { TipoVeiculoUpdateComponent } from './components/tipo-veiculo/tipo-veiculo-update/tipo-veiculo-update.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { EntradaComponent } from './views/entrada/entrada.component';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { TipoVeiculoComponent } from './views/tipo-veiculo/tipo-veiculo.component';
import { VeiculoComponent } from './views/veiculo/veiculo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "clientes",
    component: ClienteComponent
  }, {
    path: "clientes/adicionar",
    component: ClienteCreateComponent
  }, {
    path: "clientes/atualizar/:id",
    component: ClienteUpdateComponent
  } , {
    path: "clientes/remover/:id",
    component: ClienteDeleteComponent
  } ,{
    path: "veiculos",
    component: VeiculoComponent
  },{
    path: "veiculos/adicionar",
    component: VeiculoCreateComponent
  },{
    path: "veiculos/atualizar/:id",
    component: VeiculoUpdateComponent
  },{
    path: "veiculos/remover/:id",
    component: VeiculoDeleteComponent
  }, {
    path: "entradas",
    component: EntradaComponent
  }, {
    path: "entradas/adicionar",
    component: EntradaCreateComponent
  }, {  
    path: "entradas/remover/:id",
    component: EntradaDeleteComponent
  }, {
    path: "pagamentos",
    component: PagamentoComponent
  },{
    path: "pagamentos/adicionar/:idEntrada",
    component: PagamentoCreateComponent
  }, {
    path: "tipo-veiculos",
    component: TipoVeiculoComponent
  }, {
    path: "tipo-veiculos/adicionar",
    component: TipoVeiculoCreateComponent
  }
  , {
    path: "tipo-veiculos/atualizar/:id",
    component: TipoVeiculoUpdateComponent
  }
  , {
    path: "tipo-veiculos/remover/:id",
    component: TipoVeiculoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
