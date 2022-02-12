import React from 'react'
import { useEffect } from 'react'
import { LoginPageView } from './login.view'

export const LoginPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('hola error')
      const url = window.location.href
      const hashCode = url.includes('?code=')
      console.log('hola error')
      if (hashCode) {
        const newUrl = url.split('?code=')
        const requestData = {
          code: newUrl[1],
        }
        const code = newUrl[1]
        console.log(code)
        console.log('  cons esinty  ' + JSON.stringify(requestData))
        const proxy_url = `https://github.com/login/oauth/access_token?client_id=5b0a416181b203e91d38?client_secret=86883543e5d2334ef802e82e6f26752941a2708d?code=${code}`
        console.log(proxy_url)
        fetch(proxy_url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            data ? console.log(data) : null
          })
          .catch((error) => {
            console.log('de aqui soy ' + error)
          })
      }
    }
  }, [])
  return <LoginPageView />
}
