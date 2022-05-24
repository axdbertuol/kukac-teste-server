import { Carro, Moto } from "../types/veiculos";
import fs from 'fs';

interface VeiculosServiceInterface {
  register: (veiculo: Carro | Moto) => Promise<void>
}

export class VeiculosService implements VeiculosServiceInterface {
  constructor() { }

  async register(veiculo: Carro | Moto) {
    let data = JSON.stringify(veiculo, null, 2)
    fs.appendFile('db.json', data, (err) => {
      if (err) throw err
      console.log('Veículo foi inserido')
    });
  }
}




