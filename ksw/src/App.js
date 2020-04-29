import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import StartersPage from './components/menu/pages/starters';
// import TapasPage from './components/menu/pages/tapas';
import EntreesPage from './components/menu/pages/entrees';
import RollsPage from './components/menu/pages/rolls';
import SushiList from './components/menu/pages/sushi-list';
import Appetizers from './components/menu/appetizers';
import Tapas from './components/menu/tapas';
import Sushi from './components/menu/sushi';
import Sashimi from './components/menu/sashimi';
import CutRolls from './components/menu/cut-rolls';
import SmallRolls from './components/menu/small-rolls';
import HandRolls from './components/menu/hand-rolls';

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
                {/* <Link to="/sushi">
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Sushi</a>
                </Link> */}
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sushi</a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link to="/sushi">
                      <a class="dropdown-item" href="#">Nigiri</a>
                    </Link>
                    <Link to="/sashimi">
                      <a class="dropdown-item" href="#">Sashimi</a>
                    </Link>
                    <Link to="/cut-rolls">
                      <a class="dropdown-item" href="#">Cut Rolls</a>
                    </Link>
                    <Link to="/small-rolls">
                      <a class="dropdown-item" href="#">Small Rolls</a>
                    </Link>
                    <Link to="/hand-rolls">
                      <a class="dropdown-item" href="#">Hand Rolls</a>
                    </Link>
                  </div>
                </div>
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
              <Route path="/sushi" component={Sushi} />
              <Route path="/sashimi" component={Sashimi} />
              <Route path="/cut-rolls" component={CutRolls} />
              <Route path="/small-rolls" component={SmallRolls} />
              <Route path="/hand-rolls" component={HandRolls} />
            </div>
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
