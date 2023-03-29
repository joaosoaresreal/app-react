import axios from 'axios'

const api = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 1000 // tempo de atraso resposta
});

export async function getUsers() {
    const users = await api.get('?results=5&?nat=BR')
    return users.data.results
}