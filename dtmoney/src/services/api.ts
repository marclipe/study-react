import axios from 'axios'

//Vou criar uma instância do axios
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});