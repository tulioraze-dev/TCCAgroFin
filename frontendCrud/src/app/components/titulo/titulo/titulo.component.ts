import { Pessoa, } from './../../pessoa/pessoa.model';
import { PessoaService } from './../../pessoa/pessoa.service';
import { HttpClient } from '@angular/common/http';
import { TituloService } from './../titulo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  //CLASSE DE TITULO
  titulo: any = {
    titulo_Data: '',
    titulo_Valor: null,
    titulo_Status: '',
    titulo_Valor_Extenso: '',
    titulo_Descricao: '',
    pagador: {
      pessoa_Id: null,
    },
    recebedor: {
      pessoa_Id: null
    },
  }

  selectedRecebedor: any = {} as Pessoa
  pessoas: any
  selectedPagador: any = {} as Pessoa

  titulo_id: string | null = null

  constructor(private tituloService: TituloService, private router: Router,
    private http: HttpClient, private pessoaService: PessoaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe((pessoas) => {
      this.pessoas = pessoas
    })
    this.titulo_id = this.route.snapshot.queryParamMap.get("id")
    if (this.titulo_id) {
      this.tituloService.getTitulo(this.titulo_id).subscribe((titulo) => {
        this.titulo = titulo
      })
    }
  }

  createTitulo(): void {
    const data = this.titulo
    data.pagador.pessoa_Id = this.selectedPagador.pessoa_Id
    data.recebedor.pessoa_Id = this.selectedRecebedor.pessoa_Id
    if (this.titulo_id) {
      this.tituloService.updateTitulo(data, this.titulo_id).subscribe(() => {
        this.pessoaService.showMessage('Editado com Sucesso!')
        this.router.navigate(['/'])
      })
    }
    else {
      this.tituloService.createT(this.titulo).subscribe(() => {
        this.tituloService.showMessage('Titulo Cadastrado')
        this.router.navigate(['/'])
      })
    }
  }
  cancel(): void {
    this.tituloService.showMessage('Titulo Cancelado')
    this.router.navigate(['/'])
  }

}
