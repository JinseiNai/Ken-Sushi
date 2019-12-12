import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Starters from '../starters';
import Appetizers from '../appetizers';
import Tapas from '../tapas';

class StartersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <div className="container">
                        <div>
                            <p>STARTERS</p>
                            <Link to="/starters">
                                <button>Salad/Soups</button>
                            </Link>
                            <Link to="/appetizers">
                                <button>Appetizers</button>
                            </Link>
                            <Link to="tapas">
                                <button>Tapas</button>
                            </Link>
                        </div>
                        <div className="menu">
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

export default StartersPage;