import React from "react"
import './style.scss'

import { Button, Input } from '../../components'

export default function Login(props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleLoginSubmit = async event => {
    event.preventDefault()

    const data = {
      name,
      email
    }

    try {
      console.log(data)
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
              label="Nome"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
            <Input
              label="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              required
            />
          </div>
          <Button type="submit">Entrar</Button>
        </section>
      </form>
    </div>
  )
}