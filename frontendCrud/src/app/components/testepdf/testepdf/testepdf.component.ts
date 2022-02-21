import { TituloService } from './../../titulo/titulo.service';
import { TestePdfService } from './../teste-pdf.service';
import { Pessoa } from './../../pessoa/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../pessoa/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import  jsPDF from 'jspdf'

@Component({
  selector: 'app-testepdf',
  templateUrl: './testepdf.component.html',
  styleUrls: ['./testepdf.component.css']
})

//CLASSE DE PESSOA
export class TestepdfComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef;
  
  titulos: any;

  titulo_id: string | null = null


  constructor(private pessoaService: PessoaService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private tituloService: TituloService) { }

  ngOnInit(): void {
    this.titulo_id = this.route.snapshot.queryParamMap.get("id")
    if (this.titulo_id) {
      this.tituloService.getTitulo(this.titulo_id).subscribe(resp => this.titulos = resp.id);
    }
  }
}
