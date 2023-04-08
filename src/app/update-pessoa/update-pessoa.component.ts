import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from '../telefone';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.css']
})
export class UpdatePessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoaById(this.id).subscribe(data => {
      this.pessoa = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.pessoaService.updatePessoa(this.id, this.pessoa).subscribe( data =>{
      this.goToPessoaList();
    }
    , error => console.log(error));
  }


  adicionarTelefone() {
    console.log('Lista antes de adicionar novo telefone:', this.pessoa.telefones);
    const novoTelefone = new Telefone();
    novoTelefone.id = null;
    novoTelefone.numero = '';
    this.pessoa.telefones = [...this.pessoa.telefones, novoTelefone];
    //this.pessoa.telefones.push({ id: null, numero: '' });
  }

  goToPessoaList(){
    this.router.navigate(['/pessoas']);
  }
}