import React, { useState } from 'react';
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
import Register from './pages/Register';
import Profile from './pages/Profile';

import PostsList from './pages/PostsList';
import CreatePost from './pages/PostsList/CreatePost';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'

import 'bootswatch/dist/superhero/bootstrap.min.css';

const messages = {
  fr: messagesFr,
};

const App = () => {
  const [language, setLanguage] = useState('fr');

  return (
  <Router>
    <IntlProvider locale={ language } messages={ messages[language] }>
      <CurrentLanguageContext.Provider value={{
        language,
        changeLanguage: (newLanguage) => setLanguage(newLanguage)
      }}>
        <Navbar languages = { Object.keys(messages) } />
        <div className="container-fluid mt-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/register" component={Register} />
            <PrivateRoute path="/postslist" component={PostsList} />
            <PrivateRoute path="/createpost" component={CreatePost} />          
          </Switch>
        </div>
      </CurrentLanguageContext.Provider>
    </IntlProvider>
  </Router>
  );
};

export default App;
