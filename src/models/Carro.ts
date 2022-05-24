import { QtdPortasCarro } from "../types/veiculos";
import { Veiculo } from "./Veiculo";

class Carro implements Veiculo {
  constructor(
    modelo: string,
    fabricacao: number,
    qtdPortas: number,
    marca: string,) {
    this.modelo = modelo;
    this.fabricacao = fabricacao;
    this.qtdPortas = qtdPortas as QtdPortasCarro;
    this.marca = marca;
  }
  modelo: string;
  fabricacao: number;
  qtdPortas: number;
  marca: string;
}