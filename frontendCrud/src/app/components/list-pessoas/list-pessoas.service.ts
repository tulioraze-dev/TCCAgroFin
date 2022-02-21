import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListPessoasService {

  constructor(private snackBar: MatSnackBar ) { }
  //FUNÇÃO DE MENSAGEM  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}

// DEVS: Tulio R Azevedo/Waldir Junior
