import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  btnSalvar(): void{
    this.router.navigate(['cadastroPessoa'])
  }

  btnCancelar(): void{
    this.router.navigate(['cadastroPessoa'])
  }

}
