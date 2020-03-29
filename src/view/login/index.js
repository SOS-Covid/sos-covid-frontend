import React from "react"
import './style.scss'
import { auth } from '../../api'

import { Button, Input } from '../../components'

export default function Login(props) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLoginSubmit = async event => {
    event.preventDefault()

    const data = {
      email,
      password
    }

    try {

      const res = await auth(data)

      console.log(res)

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleLoginSubmit}>
        <section>
          <h1>Login</h1>
          <div className="input-group">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <Input
              label="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              required
            />
          </div>
          <Button type="submit">Entrar</Button>
        </section>
      </form>
    </div>
  )
}