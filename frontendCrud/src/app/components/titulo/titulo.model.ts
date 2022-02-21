export interface Recebedor {
   recebedor_Id?: number,
   pessoa_Id: number
}

export interface Pagador {
   pagador_Id?: number
   pessoa_Id: number
}


export interface Titulo {
   id?: number
   titulo_Data?: Date
   titulo_Valor: number
   titulo_Status: string 
   titulo_Valor_Extenso: string
   titulo_Descricao: string
}



