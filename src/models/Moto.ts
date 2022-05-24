import { Veiculo } from "./Veiculo";
export class Moto implements Veiculo {
  constructor(
    modelo: string,
    fabricacao: number,
    qtdPortas: number,
    rodas: number,
    passageiros: number,
    marca: string
  ) {
    this.modelo = modelo;
    this.fabricacao = fabricacao;
    this.qtdPortas = qtdPortas;
    this.rodas = rodas;
    this.passageiros = passageiros;
    this.marca = marca;
  }
  marca: string;
  modelo: string;
  fabricacao: number;
  qtdPortas: number;
  passageiros: number;
  rodas: number;
}

