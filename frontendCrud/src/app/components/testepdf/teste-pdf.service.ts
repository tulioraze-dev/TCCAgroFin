import { Pessoa } from './../pessoa/pessoa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestePdfService {

  baseUrl = "https://localhost:5001"

  constructor(private http: HttpClient) { }

  getPessoa(pessoa_Id: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/Pessoa/${pessoa_Id}`)
  }
}
