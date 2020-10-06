import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import EntryList from './EntryList';
import EntryEdit from './EntryEdit';
import PageHeader from './PageHeader';

const App = () => {
  return (
    <BrowserRouter>
      <PageHeader/>
        <Route path='/' exact component={LoginForm} />
        <Route path='/list' exact component={EntryList} />
        <Route path='/create' exact component={EntryEdit} />
        <Route path='/edit/:id' exact component={EntryEdit} />
    </BrowserRouter>
  )
}

export default App;