import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoaListComponent},
  {path: 'create-pessoa', component: CreatePessoaComponent},
  {path: '', redirectTo: 'pessoas', pathMatch: 'full'},
  {path: 'update-pessoa/:id', component: UpdatePessoaComponent},
  {path: 'pessoa-details/:id', component: PessoaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }