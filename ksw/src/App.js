import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
// import StartersPage from './components/menu/pages/starters';
import EntreesPage from './components/menu/pages/entrees';
import RollsPage from './components/menu/pages/rolls';
import SushiList from './components/menu/pages/sushi-list';
import Starters from './components/menu/starters';
import Appetizers from './components/menu/appetizers';
import Tapas from './components/menu/tapas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    // openNav() {
    //   document.getElementById("nav").style.display = "block";
    // }
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App App-header">
            <div className="banner">
              <div className="title">
                <Link to="/">
                  <h1>Ken Sushi Workshop</h1>
                </Link>
              </div>
              <div>
                <div className="nav" id="nav">
                    {/* <Link to="/starters"> */}
                      <button className="dropdown-starter">Starters</button>
                    {/* </Link> */}
                      <div className="starter-container">
                        <Link to="/starters">
                          <button>Salad/Soups</button>
                        </Link>
                        <Link to="/appetizers">
                          <button>Appetizers</button>
                        </Link>
                        <Link to="/tapas">
                          <button>Tapas</button>
                        </Link>
                      </div>
                    <Link to="/entrees">
                      <button>Entrees</button>
                    </Link>
                    <Link to="/rolls">
                      <button>Rolls</button>
                    </Link>
                    <Link to="/sushi">
                      <button>Sushi</button>
                    </Link>
                </div>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={Homepage} />
              {/* <Route path="/starters" component={StartersPage} /> */}
              <Route path="/entrees" component={EntreesPage} />
              <Route path="/rolls" component={RollsPage} />
              <Route path="/sushi" component={SushiList} />
              <Route path="/starters" component={Starters} />
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
