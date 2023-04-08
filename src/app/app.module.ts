import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { FormsModule} from '@angular/forms';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    CreatePessoaComponent,
    UpdatePessoaComponent,
    PessoaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }