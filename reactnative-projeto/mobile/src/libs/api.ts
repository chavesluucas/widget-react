import axios from "axios"

export const api = axios.create({
    baseURL: 'http://172.24.144.1:3333'
});