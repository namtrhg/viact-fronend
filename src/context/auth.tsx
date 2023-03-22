import { createContext, isSSR } from '@dwarvesf/react-utils'
import { client } from 'libs/api'
import { useCallback, useState } from 'react'
import { WithChildren } from 'types/common'

interface AuthContextValues {
  isLogin: boolean
  login: (email: string, password: string) => Promise<any>
  logout: () => void
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
})

const tokenKey = 'viact'

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })

  const login = async (emailOrUsername: string, password: string) => {
    try {
      await client.signIn({ emailOrUsername, password }).then((data) => {
        setIsLogin(true)
        window.localStorage.setItem('userid', data.user.id)
        window.localStorage.setItem(tokenKey, data.token)
      })
    } catch (error: any) {
      alert(error.message)
    }
  }

  const logout = useCallback(() => {
    setIsLogin(false)
    window.localStorage.removeItem(tokenKey)
  }, [])

  return <Provider value={{ isLogin, login, logout }}>{children}</Provider>
}

export { AuthContextProvider, useAuthContext }
