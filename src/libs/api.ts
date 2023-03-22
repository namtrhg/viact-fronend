import { User } from 'types/schema'
import axios from 'axios'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.BASE_URL

// keys for swr
export const GET_PATHS = {
  getUsers: '/users',
}

export type FetcherError = Error & { response: { data: { message: string } } }

export default async function fetcher<T = any>(
  url: string,
  options?: any,
): Promise<T> {
  try {
    const response = await axios(url, options)
    return response.data
  } catch (error: any) {
    const err = new Error(error ?? 'Unknown error') as FetcherError
    err.response = { data: { message: err.message } }
    return Promise.reject(err)
  }
}

class Client {
  headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  async signIn(body: User) {
    const response = await fetcher(`${BASE_URL}/auth/login`, {
      headers: this.headers,
      method: 'POST',
      data: body,
    })
    return response
  }

  async signUp(body: User) {
    const response = await fetcher(`${BASE_URL}/auth/register`, {
      headers: this.headers,
      method: 'POST',
      data: body,
    })
    return response
  }

  async getUsers() {
    const response = await fetcher<User[]>(`${BASE_URL}/users`, {
      headers: this.headers,
      method: 'GET',
    })
    return response
  }
}

const client = new Client()

export { client }
