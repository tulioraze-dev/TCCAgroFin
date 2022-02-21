import { Pessoa } from './../pessoa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

//CLASSE DE PESSOA
export class PessoaComponent implements OnInit {
  pessoa = {
    pessoa_Numero_Identificador: '',
    pessoa_Nome: '',
    enderecos: [
      {
        endereco_Logradouro: '',
        endereco_Numero: null,
        endereco_Complemento: '',
        endereco_Cep: '',
        endereco_Bairro: '',
        endereco_Cidade: '',
        endereco_Estado: ''
      }
    ]
  } as Pessoa

   
  pessoa_id: string | null = null

  

  constructor(private pessoaService: PessoaService,
    private router: Router, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    //SE PESSOA_ID POSSUIR VALOR AO INICIAR CHAMA A FUNÇÃO GET E TRAZ OS DADOS ASSOCIADOS NA TELA
    this.pessoa_id = this.route.snapshot.queryParamMap.get("pessoa_Id")
    if (this.pessoa_id) {
      this.pessoaService.getPessoa(this.pessoa_id).subscribe((pessoa) => {
        this.pessoa = pessoa 
      })
    }
  }
  
  //METODOS ASSOCIADOS AO BOTÃO SALVAR
  btnSalvar(): void {
    //SE PESSOA_ID TIVER VALOR ATRIBUIDO CHAMA FUNÇAO UPDATE 
    if (this.pessoa_id) {
      this.pessoaService.updatePessoa(this.pessoa, this.pessoa_id).subscribe(() => {
        this.pessoaService.showMessage('Editado com Sucesso!')
        this.router.navigate(['pessoa'])
      })
    }
    //SE PESSOA_ID NÃO TIVER VALOR ATRIBUIDO CHAMA FUNÃO CREATE 
    else {
      this.pessoaService.create(this.pessoa).subscribe(() => {
        this.pessoaService.showMessage('Salvo com sucesso!')
        this.router.navigate(['pessoa'])
      })
    }
  }
  //METODO CANCELAR CADASTRO
  btnCancelar(): void {
    this.pessoaService.showMessage('Cadastro Cancelado')
    this.router.navigate(['pessoa'])
  }
}

//DEVS: Tulio R Azevedo/Waldir Junior

