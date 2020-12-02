export interface Pagamento {
    id?: number;
    entradaId: number;
    valorPagamento: number;
    valorTotalEntrada: number;
    quantidadeIntervaloDeTempo: number;
    tempoEstacionamento: number;
}