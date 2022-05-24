
interface CepServiceInterface {
  findAll: (ceps: string[]) => string[]
}
export class CepService implements CepServiceInterface {
  constructor() { }
  findAll(ceps: string[]) {
    return []
  }
}