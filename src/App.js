import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home,Profile,About} from './pages';
import {Navigation} from './components/Navigation/Navigation';
import {Provider} from 'react-redux';
import {Reducer} from './redux/reducer';
import {createStore} from 'redux';
import {Alert} from './components/Alert/alert';
const store = createStore(Reducer);

const  App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navigation />
    <Alert />
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    </Switch>
      
    </BrowserRouter>
    </Provider>
  );
}

export default App;

