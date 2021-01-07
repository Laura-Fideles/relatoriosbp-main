import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavBar/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
/*import Slidebar from './components/NavBar/Sidebar';*/

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={About} />
          <Route component={NoMatch} /> 
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
