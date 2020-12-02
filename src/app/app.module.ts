import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { ClienteComponent } from './views/cliente/cliente.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { VeiculoComponent } from './views/veiculo/veiculo.component';
import { EntradaComponent } from './views/entrada/entrada.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { TipoVeiculoComponent } from './views/tipo-veiculo/tipo-veiculo.component';
import { HomeComponent } from './views/home/home.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { TipoVeiculoCreateComponent } from './components/tipo-veiculo/tipo-veiculo-create/tipo-veiculo-create.component';
import { TipoVeiculoReadComponent } from './components/tipo-veiculo/tipo-veiculo-read/tipo-veiculo-read.component';
import { TipoVeiculoUpdateComponent } from './components/tipo-veiculo/tipo-veiculo-update/tipo-veiculo-update.component';
import { TipoVeiculoDeleteComponent } from './components/tipo-veiculo/tipo-veiculo-delete/tipo-veiculo-delete.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { VeiculoReadComponent } from './components/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';
import { EntradaCreateComponent } from './components/entrada/entrada-create/entrada-create.component';
import { EntradaReadComponent } from './components/entrada/entrada-read/entrada-read.component';
import { EntradaDeleteComponent } from './components/entrada/entrada-delete/entrada-delete.component';
import { PagamentoReadComponent } from './components/pagamento/pagamento-read/pagamento-read.component';
import { PagamentoCreateComponent } from './components/pagamento/pagamento-create/pagamento-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    VeiculoComponent,
    EntradaComponent,
    PagamentoComponent,
    TipoVeiculoComponent,
    HomeComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteReadComponent,
    ClienteDeleteComponent,
    TipoVeiculoCreateComponent,
    TipoVeiculoReadComponent,
    TipoVeiculoUpdateComponent,
    TipoVeiculoDeleteComponent,
    VeiculoCreateComponent,
    VeiculoReadComponent,
    VeiculoUpdateComponent,
    VeiculoDeleteComponent,
    EntradaCreateComponent,
    EntradaReadComponent,
    EntradaDeleteComponent,
    PagamentoReadComponent,
    PagamentoCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
