import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './componentes/paginas/home/home.component';
import { ContaComponent} from './componentes/paginas/conta/conta.component';
import { LoginComponent} from './componentes/paginas/login/login.component';
import { SobreComponent} from './componentes/paginas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
