import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../../api';


export default function Login() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);


  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);

    try {
      const res = await auth(data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Login">
      <div className="login-form">
        <Form onSubmit={handleLoginSubmit} style={{ width: '18rem' }}>
          <header className="d-flex align-items-center">
            <h1>Login</h1>
            <span className="text-muted">Cadastre-se</span>
          </header>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={emailRef}
              size="lg"
              required
              type="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control ref={passwordRef} size="lg" required type="password" />
          </Form.Group>
          <Button type="submit" size="lg" block>Entrar</Button>
        </Form>
      </div>
      <div className="login-info">
        <Link to="/">
          <h1 className="text-white">
            Cooperação
            <br />
            {' '}
            Solidária
          </h1>
        </Link>
      </div>
    </div>
  );
}
