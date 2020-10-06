import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const PageHeader = () => {

  return (
    <header>
      <img className="logo" alt="Logo Sicredi" src={`${process.env.PUBLIC_URL}/img/logo_sicredi.png`}/>
      <div className="user-header">
        <span>Anderson</span>
        <Link to="/">
          <img alt="Sair" src={`${process.env.PUBLIC_URL}/img/logout.png`}/>
        </Link>
      </div>
    </header>
  );
}

export default PageHeader;