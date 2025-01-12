import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { SobreComponent } from './componentes/paginas/sobre/sobre.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { ContaComponent } from './componentes/paginas/conta/conta.component';

import { FormsModule } from "@angular/forms";
import { PainelComponent } from './componentes/paginas/painel/painel.component'



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    LoginComponent,
    ContaComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
