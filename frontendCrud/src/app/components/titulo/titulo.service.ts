import { Pessoa } from './../pessoa/pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Titulo } from './titulo.model';
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa/pessoa.service';


@Injectable({
  providedIn: 'root'
})
export class TituloService {

  baseUrl = "https://localhost:5001"

  constructor(private snackBar: MatSnackBar, private http: HttpClient,) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createT(titulo: any): Observable<Titulo> {
    return this.http.post<Titulo>(`${this.baseUrl}/Titulo`, titulo)
  }

   // FUNÇÃO DE CRIAÇÃO DE TITULO
    //FUNÇÃO DE PESQUISA DE TITULO POR ID 
    getTitulo(titulo_Id: string): Observable<Titulo> {
      return this.http.get<Titulo>(`${this.baseUrl}/Titulo/${titulo_Id}`)
    }
    //FUNÇÃO DE EDITAR UMA TITULO POR ID
    updateTitulo(titulo: Titulo, titulo_Id: string): Observable<Titulo> {
      return this.http.put<Titulo>(`${this.baseUrl}/Titulo/${titulo_Id}`, titulo)
    }
    //FUNÇÃO DE DELETAR UMA TITULO POR ID 
    deleteTitulo(titulo_Id: string): Observable<Titulo> {
      return this.http.delete<Titulo>(`${this.baseUrl}/Titulo/${titulo_Id}`)
    }
  //FUNÇÃO DE GET ALL TITULOS 
  getTitulos(): Observable<Titulo[]> {
    return this.http.get<Titulo[]>(`${this.baseUrl}/Titulo`)
  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}/Pessoa/`)
  }
}