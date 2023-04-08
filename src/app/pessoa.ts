import { Telefone } from "./telefone";

export class Pessoa {
    id: number;
    nome: string;
    endereco: string;
    bairro: string;
    telefones: Telefone[];

}