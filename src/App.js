import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home,Profile,About} from './pages';
import {Navigation} from './components/Navigation/Navigation';
import {AlertState} from './context/alertState';
import {Alert} from './components/Alert/alert';
import {GithubState} from './context/github/githubState';
const  App = () => {
  return (
  <GithubState>
   <AlertState>
    <BrowserRouter>
    <Navigation />
    <Alert />
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    </Switch>
      
    </BrowserRouter>
   </AlertState>
  </GithubState>
  );
}

export default App;

