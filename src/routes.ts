import express from 'express'
import { VeiculosService } from './services/veiculos-service'
import { Carro, Moto } from './types/veiculos'
import { getChange, palindromeInterval } from './utils/functions'
export const routes = express.Router()

export type Change = {
  total: number | undefined
  given: number | undefined
}

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post('/palindromes', (req, res) => {
  const { first, last } = req.body
  const answer = palindromeInterval(first, last)
  res.json(answer)
})

routes.post('/getChange', (req, res) => {
  const { total, given }: Change = req.body
  try {
    const { finalChange, result } = getChange(total, given)
    res.json({ total, finalChange, result })
  } catch (error) {
    res.status(500).json({ "error": error })
  }
})

routes.post('/registerVehicle', async (req, res) => {
  const { veiculo }: { veiculo: Carro | Moto } = req.body
  const veiculosService = new VeiculosService()
  console.log(veiculo)
  try {
    await veiculosService.register(veiculo)
    res.status(201).json({})
  } catch (error) {
    res.status(500).json({ "error": error })
  }
})