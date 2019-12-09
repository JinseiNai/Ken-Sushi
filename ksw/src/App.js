import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App App-header">
            <Route exact path="/" component={Homepage} />
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
