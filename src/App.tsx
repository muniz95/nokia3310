import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BatteryStatus from './components/BatteryStatus';
import SignalStatus from './components/SignalStatus';
import Home from './views/Home';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <SignalStatus />
          <div className="container">
            <Switch>
              <Route exact={true} path='/' component={Home} />
            </Switch>
          </div>
          <BatteryStatus />
        </div>
      </Router>
    );
  }
}

export default App;
