import { Carro } from "../models/Carro";
import { Moto } from "../models/Moto";
import { VeiculosService } from "../services/veiculos-service";

describe('testing veiculos service', () => {
  test('register Moto successfully', async () => {
    const veiculo = new Moto("a", 2006, 0, 2, 2, "h")
    const veiculosService = new VeiculosService()
    const data = await veiculosService.register(veiculo)
    expect(data).toMatch(JSON.stringify(veiculo, null, 2))
  });
  test('register Carro successfully', async () => {
    const veiculo = new Carro("a", 2006, 2, "k")
    const veiculosService = new VeiculosService()
    const data = await veiculosService.register(veiculo)
    expect(data).toMatch(JSON.stringify(veiculo, null, 2))
  });


});