import express from 'express'
import { Veiculo } from './models/Veiculo'
import { VeiculosService } from './services/veiculos-service'
import { Carro, Moto } from './types/veiculos'
import { getChange, palindromeInterval } from './utils/functions'

const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/palindromes', (req, res) => {
  const { first, last } = req.body
  const answer = palindromeInterval(first, last)
  res.json(answer)
})

app.post('/getChange', (req, res) => {
  const { totalValue, givenValue } = req.body
  const { change, result } = getChange(totalValue, givenValue)
  res.json({ totalValue, change, result })
})



app.post('/registerVehicle', async (req, res) => {
  const { veiculo }: { veiculo: Carro | Moto } = req.body
  const veiculosService = new VeiculosService()
  try {
    await veiculosService.register(veiculo)
    res.status(201).json({})
  } catch (error) {
    res.status(500).json({ "error": error })
  }
})

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)