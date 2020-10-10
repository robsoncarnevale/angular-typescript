import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* IMPORT DAS ROTAS */
import { HomeComponent } from './views/home/home.component';
import { ContasCadastroComponent } from './views/contas-cadastro/contas-cadastro.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { ProdutosbancoComponent } from './views/produtosbanco/produtosbanco.component';
import { BdindraComponent } from './views/bdindra/bdindra.component';
import { CartoesComponent } from './views/cartoes/cartoes.component';

/* DEFININDO ROTAS */
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contas",
    component: ContasCadastroComponent
  },
  {
    path: "contas/create",
    component: AccountCreateComponent
  },
  {
    path: "produtos",
    component: ProdutosbancoComponent
  },
  {
    path: "bdindra",
    component: BdindraComponent
  },
  {
    path: "cartoes",
    component: CartoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
