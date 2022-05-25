import fs from 'fs';
import { getCepInfo } from '../api';
import { GetCepInfoResponse } from '../types/api';
const defaultCeps = {
  "cep1": "",
  "cep2": "",
  "cep3": "",
  "cep4": "",
  "cep5": ""
}

export type CepsBody = typeof defaultCeps
interface CepServiceInterface {
  getSyncedCepsInfo: (ceps: CepsBody) => Promise<GetCepInfoResponse[]>
}

export class CepService implements CepServiceInterface {
  constructor() { }
  async getSyncedCepsInfo(ceps: CepsBody) {
    console.log(ceps)
    Object.entries(ceps).forEach((([key, value]) => console.log("xx", key, "xxx", value)))
    let promises = Object.entries(ceps)
      .filter(([key, value]) => value.length === 8)
      .map(([key, value]) => {
        console.log(key, value)
        return async () => getCepInfo({ cep: value })
      })
    console.log("oi", promises)
    let result = Promise.resolve()
    const viaCepsResponses: GetCepInfoResponse[] = []
    promises.forEach(function (promise) {
      result = result.then(promise)
        .then((res) => {
          console.log("x", res)
          viaCepsResponses.push(res)
          return Promise.resolve()
        })
    })

    await result
    return viaCepsResponses
  }


}




