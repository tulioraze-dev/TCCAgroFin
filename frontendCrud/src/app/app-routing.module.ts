import { TestepdfComponent } from './components/testepdf/testepdf/testepdf.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
/* import { CadastroTituloComponent } from './views/cadastro-titulo/cadastro-titulo.component'; */
import { PessoaComponent } from './components/pessoa/pessoa/pessoa.component';
import { TituloComponent } from './components/titulo/titulo/titulo.component';



const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "cadastroTitulo", component: TituloComponent },
  { path: "pessoa", component: CadastroPessoaComponent },
  { path: "cadastroPessoa", component: PessoaComponent},
  { path: "testePdf", component: TestepdfComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
