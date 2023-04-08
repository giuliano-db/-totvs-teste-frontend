import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.css']
})
export class PessoaDetailsComponent implements OnInit {

  id: number
  pessoa: Pessoa
  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pessoa = new Pessoa();
    this.pessoaService.getPessoaById(this.id).subscribe( data => {
      this.pessoa = data;
    });
  }
}