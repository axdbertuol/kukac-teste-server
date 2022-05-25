import axios, { AxiosResponse } from 'axios'
import { GetCepInfoResponse } from '../types/api';

export const getCepInfo = ({ cep }: { cep: string }) => {
  console.log("c", cep);
  return axios.get(`http://viacep.com.br/ws/${cep}/json`)
    .then((r: AxiosResponse<GetCepInfoResponse>) => r.data)
  // .catch((e) => console.error(e));
}