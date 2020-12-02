export interface EntradaResponse{
    id: number ;
	placa: string ;
	cor: string ;
	modelo: string ;
	tipoVeiculo: string ;
	precoPorTipoVeiculo: number ;
	cpf: string ;
	nome: string ;
	telefone: string ;
	celular: string ;
	email: string ;
	dataHoraEntrada: Date ;
	dataHoraSaida?: Date ; // "2020-11-05T16:09:04.620148-03:00"
	valorPagamento?: number ;
	valorTotalEntrada?: number ;
	tempoEstacionamento?: number ;
}
