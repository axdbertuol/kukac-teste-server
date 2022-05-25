import { Carro, Moto } from "../types/veiculos";
import fs from 'fs';

interface VeiculosServiceInterface {
  register: (veiculo: Carro | Moto) => Promise<string>
}

export class VeiculosService implements VeiculosServiceInterface {
  constructor() { }

  async register(veiculo: Carro | Moto) {
    let data = JSON.stringify(veiculo, null, 2).concat(",")
    fs.appendFile('db.json', data, (err) => {
      if (err) throw err
    });
    return data;
  }
}




