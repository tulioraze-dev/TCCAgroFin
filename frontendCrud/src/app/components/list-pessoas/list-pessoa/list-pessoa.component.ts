import { PessoaService } from './../../pessoa/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListPessoasService } from './../list-pessoas.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pessoa } from '../../pessoa/pessoa.model';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})

export class ListPessoaComponent implements OnInit {

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

  @ViewChild('content', {static: false}) el!: ElementRef;

  // FORMATAÇÃO DAS COLUNAS NA TABELA
  displayedColumns: string[] =  ['id', 'CPF/CNPJ', 'Nome', 'CEP', 'Logradouro', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'Estado', 'Ações'];

  // DEFINE O DATASOURCE DA TABELA COMO O OBJETO PESSOA
  dataSource: Pessoa[] = [];
  pessoa_id: string | null = null

  constructor(private pessoaService: PessoaService, private router: Router, private route: ActivatedRoute,
     private listPessoasService: ListPessoasService) { }

  // TRAZ A LISTA DE PESSOAS DO BACKEND AO INICIAR
  ngOnInit(): void {
    this.listPessoas()
  }

  //FUNÇÃO ATRIBUIDA AO BOTÃO DE EDITAR
  btnEditar(pessoa_Id: number) {
    this.router.navigate(['/cadastroPessoa'], { queryParams: { pessoa_Id } })
  }

  // METODO DO BOTÃO DELETAR
  btnDelete(pessoa_Id: string) {
    this.pessoaService.deletePessoa(pessoa_Id).pipe().subscribe(() => {
      this.listPessoasService.showMessage('Deletado com sucesso')
    })
    this.listPessoas()
  }
  //FUÇÃO DE GET ALL PESSOAS
  listPessoas() {
    return this.pessoaService.getPessoas().subscribe((pessoas) => {
      this.dataSource = pessoas
    })
  }

  /* BOTAO COM OS METODOS DE IMPRIMIR  */
  btnImprimir(pessoa_Id: number) {

    this.pessoa_id = this.route.snapshot.queryParamMap.get("pessoa_Id")
    if (this.pessoa_id) {
      this.pessoaService.getPessoa(this.pessoa_id).subscribe(pessoa => {
        this.pessoa = pessoa
      })
    }
    this.router.navigate(['testePdf']), { queryParams: { pessoa_Id } }
  }
}
// DEVS: Tulio R Azevedo/Waldir Junior
