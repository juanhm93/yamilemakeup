import axios from 'axios'

const Base_URL = 'http://localhost:3700/api/'

const API = axios.create({
    baseURL: Base_URL
})

export default API