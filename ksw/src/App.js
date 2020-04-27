import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import StartersPage from './components/menu/pages/starters';
import TapasPage from './components/menu/pages/tapas';
import EntreesPage from './components/menu/pages/entrees';
import RollsPage from './components/menu/pages/rolls';
import SushiList from './components/menu/pages/sushi-list';
import Appetizers from './components/menu/appetizers';
import Tapas from './components/menu/tapas';

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
          <div className="App">
            <div className="banner">
              <div className="title">
                <Link to="/">
                  <h1>Ken Sushi Workshop</h1>
                </Link>
              </div>
              <nav class="nav nav-pills flex-column flex-sm-row">
                {/* <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Starters</a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link to="/starters">
                      <a class="dropdown-item" href="#">Salad/Soups</a>
                    </Link>
                    <Link to="/appetizers">
                      <a class="dropdown-item" href="#">Appetizers</a>
                    </Link>
                    <Link to="/tapas">
                      <a class="dropdown-item" href="#">Tapas</a>
                    </Link>
                  </div>
                </div> */}
                <Link to="/starters">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Starters</a>
                </Link>
                <Link to="/tapas">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Tapas</a>
                </Link>
                <Link to="/entrees">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Entrees</a>
                </Link>
                <Link to="/rolls">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Rolls</a>
                </Link>
                <Link to="/sushi">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Sushi</a>
                </Link>
              </nav>
            </div>
            <div className="content">
              <Route exact path="/" component={Homepage} />
              <Route path="/starters" component={StartersPage} />
              <Route path="/entrees" component={EntreesPage} />
              <Route path="/rolls" component={RollsPage} />
              <Route path="/sushi" component={SushiList} />
              <Route path="/appetizers" component={Appetizers} />
              <Route path="/tapas" component={Tapas} />
            </div>
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
