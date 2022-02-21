
export interface Pessoa{
  pessoa_Id?: number,
  pessoa_Numero_Identificador: string,
  pessoa_Nome: string,
  enderecos: Endereco[]
}

export interface Endereco {
  endereco_Id?: number,
  endereco_Logradouro: string,
  endereco_Numero: number | null,
  endereco_Complemento: string,
  endereco_Cep: string,
  endereco_Bairro: string,
  endereco_Cidade: string,
  endereco_Estado: string,
}
