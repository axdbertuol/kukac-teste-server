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
    let promises = Object.entries(ceps)
      .filter(([key, value]) => value.length === 8)
      .map(([key, value]) => {
        return async () => getCepInfo({ cep: value })
      })
    let result = Promise.resolve()
    const viaCepsResponses: GetCepInfoResponse[] = []
    promises.forEach(function (promise) {
      result = result.then(promise)
        .then((res) => {
          viaCepsResponses.push(res)
          return Promise.resolve()
        })
    })

    await result
    return viaCepsResponses
  }


}




