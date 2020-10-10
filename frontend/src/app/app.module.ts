import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* IMPORT COMPONENTES TEMPLATES */
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

/* IMPORT MATERIAL STYLE */
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/* IMPORT OUTROS COMPONENTES */
import { HomeComponent } from './views/home/home.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';

/* IMPORT VIEW */
import { ContasCadastroComponent } from './views/contas-cadastro/contas-cadastro.component';
import { ProdutosbancoComponent } from './views/produtosbanco/produtosbanco.component';
import { BdindraComponent } from './views/bdindra/bdindra.component';
import { CartoesComponent } from './views/cartoes/cartoes.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContasCadastroComponent,
    AccountCreateComponent,
    ProdutosbancoComponent,
    BdindraComponent,
    CartoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule, 
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
