import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* IMPORT DAS ROTAS */
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { ProdutosbancoComponent } from './views/produtosbanco/produtosbanco.component';
import { BdindraComponent } from './views/bdindra/bdindra.component';
import { CartoesComponent } from './views/cartoes/cartoes.component';
import { AuthGuardService } from './views/guards/auth.guard.service';

/* DEFININDO ROTAS */
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contas",
    component: LoginComponent
  },
  {
    path: "contas/create",
    component: AccountCreateComponent
  },
  {
    path: "contas/login",
    component: LoginComponent
   
  },
  {
    path: "produtos",
    component: ProdutosbancoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "bdindra",
    component: BdindraComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "cartoes",
    component: CartoesComponent,
     canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
