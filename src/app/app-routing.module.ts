import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: "veiculos",
    component: VeiculoComponent
  }, {
    path: "entradas",
    component: EntradaComponent
  }, {
    path: "pagamentos",
    component: PagamentoComponent
  }, {
    path: "tipo-veiculos",
    component: TipoVeiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
