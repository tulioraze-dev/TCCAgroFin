import { ListTituloService } from './../list-titulo.service';
import { Router } from '@angular/router';
import { TituloService } from './../../titulo/titulo.service';
import { Titulo } from './../../titulo/titulo.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-titulo',
  templateUrl: './list-titulo.component.html',
  styleUrls: ['./list-titulo.component.css']
})
export class ListTituloComponent implements OnInit {

  // FORMATAÇÃO DE COLUNAS NA TABELA
  displayedColumns: string[] = ['id', 'CPF/CNPJ', 'Nome', 'Descrição', 'Valor', 'Status', 'Ações'];

  // DEFINE O DATASOURCE DA TABELA COMO O OBJETO TITULO
  dataSource: Titulo[] = [];

  constructor(private tituloService: TituloService, private router: Router, private listTituloService: ListTituloService) { }

  // TRAZ A LISTA DE TITULOS DO BACKEND AO INICIAR 
  ngOnInit(): void {
    this.listTitulos()
  }

  //METODO DE EDITAR TITULO POR ID ASSOCIADO AO BOTAO DE EDITAR
  btnEditarTitulo(id: number) {
    this.router.navigate(['/cadastroTitulo'], { queryParams: { id } })
  }

  // METODO DE DELETE ASSOCIADO AO BOTAO DELETAR
  btnDeleteTitulo(titulo_Id: string) {
    this.tituloService.deleteTitulo(titulo_Id).pipe().subscribe(() => {
      this.listTituloService.showMessage('Deletado com sucesso')
    })
    this.listTitulos()
  }

  //FUÇÃO DE GET ALL TITULOS 
  listTitulos() {
    return this.tituloService.getTitulos().pipe().subscribe((titulo) => {
      this.dataSource = titulo
    })
  }

  btnImprimirTitulo(id: number) {
    this.router.navigate(['testePdf'], { queryParams: { id } })
  }
}
//DEVS: Tulio R Azevedo/Waldir Junior


