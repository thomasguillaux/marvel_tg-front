import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie'
import Header from './components/Header'
import Characters from './containers/Characters'
import Charcomics from './containers/Charcomics'
import Comics from './containers/Comics'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Favorites from './containers/Favorites'

function App() {

  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires : 7});
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null)
    }
  }

  return (
    <div className="App">
      <Router>
        <Header userToken={userToken} setUser={setUser}/>
        <Switch>
          <Route path="/characters" >
            <Characters userToken={userToken}/>
          </Route>
         
          <Route path="/comics/:id">
            <Charcomics/>
          </Route>

          <Route path="/comics">
            <Comics/>
          </Route>

          <Route path="/favorites/:userToken">
            <Favorites userToken={userToken}/>
          </Route>

          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>

          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
