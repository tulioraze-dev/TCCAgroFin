import { Pessoa } from './pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //URL API
  baseUrl = "https://localhost:5001"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // FUNÇÃO DE CRIAÇÃO DE PESSOA
  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.baseUrl}/Pessoa`, pessoa)
  }
  //FUNÇÃO DE PESQUISA DE PESSOA POR ID 
  getPessoa(pessoa_Id: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/Pessoa/${pessoa_Id}`)
  }
  //FUNÇÃO DE EDITAR UMA PESSOA POR ID
  updatePessoa(pessoa: Pessoa, pessoa_Id: string ): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.baseUrl}/Pessoa/${pessoa_Id}`, pessoa)
  }
  //FUNÇÃO DE DELETAR UMA PESSOA POR ID 
  deletePessoa(pessoa_Id: string): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this.baseUrl}/Pessoa/${pessoa_Id}`)
  }
  //FUNÇÃO DE GET ALL PESSOAS 
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}/Pessoa`)
  }
}
