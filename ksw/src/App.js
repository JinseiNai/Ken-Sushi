import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import StartersPage from './components/menu/pages/starters';
import EntreesPage from './components/menu/pages/entrees';
import RollsPage from './components/menu/pages/rolls';

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
            <div className="banner">
              <Link to="/">
                <div className="title">
                  <h1>Ken Sushi Workshop</h1>
                  <div className="nav">
                    <Link to="/starters">
                      <button>Starters</button>
                    </Link>
                    <Link to="/entrees">
                      <button>Entrees</button>
                    </Link>
                    <Link to="Rolls">
                      <button>Rolls</button>
                    </Link>
                    <Link to="Sushi">
                      <button>Sushi</button>
                    </Link>
                  </div>
                </div>
              </Link>

                
            </div>
            <Route exact path="/" component={Homepage} />
            <Route path="/starters" component={StartersPage} />
            <Route path="/entrees" component={EntreesPage} />
            <Route path="/rolls" component={RollsPage} />
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
