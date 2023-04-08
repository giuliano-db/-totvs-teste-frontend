import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import { Telefone } from '../telefone';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {
    telefonesEditados: Telefone[] = [];
    pessoa: Pessoa = {
        id: 0,
        nome: '',
        endereco: '',
        bairro: '',
        telefones: [{ id: null, numero: '' }]
      };
  constructor(private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  adicionarTelefone() {
    const novoTelefone = new Telefone();
    novoTelefone.id = null;
    novoTelefone.numero = '';
     this.pessoa.telefones = [...this.pessoa.telefones, novoTelefone];
  }

  savePessoa(){
    this.pessoaService.createPessoa(this.pessoa).subscribe( data =>{
      console.log(data);
      this.goToPessoaList();
    },
    error => console.log(error));
  }

  goToPessoaList(){
    this.router.navigate(['/pessoas']);
  }
  
  onSubmit(){
    console.log(this.pessoa);
    this.savePessoa();
  }
}