import { Veiculo } from "../models/Veiculo"
export type QtdPortasCarro = 2 | 4;

export type Carro = Veiculo & {
  qtdPortas: QtdPortasCarro
}

export type Moto = Veiculo | {
  rodas: number,
  passageiros: number
}