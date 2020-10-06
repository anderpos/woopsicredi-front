import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.scss';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    history.push("/list");
  }

  return (
    <div className="login-container">
      <img className="logo" alt="Logo Sicredi" src={`${process.env.PUBLIC_URL}/img/logo_sicredi.png`}/>
      <h3>Bem-vindo</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-field">
            <label htmlFor="email">
              <img src={`${process.env.PUBLIC_URL}/img/email.png`} alt="Email"/>
            </label>
            <input id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
          <div className="form-field">
            <label htmlFor="password">
              <img src={`${process.env.PUBLIC_URL}/img/password.png`} alt="Senha"/>
            </label>
            <input id="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <input className="submit-button" type="submit" value="Acessar"/>
        </fieldset>
      </form>
    </div>
    
  );
}

export default LoginForm;