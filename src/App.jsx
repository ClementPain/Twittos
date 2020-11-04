import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { IntlProvider } from 'react-intl';
import CurrentLanguageContext from './assets/translation';
import messagesFr from './assets/translation/fr';

import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import Register from './pages/Register';
import User from './pages/User';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'

import 'bootswatch/dist/superhero/bootstrap.min.css';

const messages = {
  fr: messagesFr,
};

const App = () => {
  const [language, setLanguage] = useState('fr');
  const counter = useSelector(state => state)

  return (
  <Router>
    <IntlProvider locale={ language } messages={ messages[language] }>
      <CurrentLanguageContext.Provider value={{
        language,
        changeLanguage: (newLanguage) => setLanguage(newLanguage)
      }}>
        <Navbar languages = { Object.keys(messages) } />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/user" component={User} />
        </Switch>
      </CurrentLanguageContext.Provider>
    </IntlProvider>
  </Router>
  );
};

export default App;
