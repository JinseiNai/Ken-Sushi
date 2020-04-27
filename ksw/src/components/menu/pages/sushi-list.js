import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Sushi from '../sushi';
import Sashimi from '../sashimi';
import CutRolls from '../cut-rolls';
import SmallRolls from '../small-rolls';
import HandRolls from '../hand-rolls';

class SushiList extends React.Component {
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
                        <div className="menu-title">
                            <p>SUSHI</p>
                            <nav class="nav nav-pills flex-column flex-sm-row">
                                <Link to="/sushi">
                                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Nigiri</a>
                                </Link>
                                <Link to="/sashimi">
                                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Sashimi</a>
                                </Link>
                                <Link to="/cut-rolls">
                                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Cut Rolls</a>
                                </Link>
                                <Link to="/small-rolls">
                                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Small Rolls</a>
                                </Link>
                                <Link to="/hand-rolls">
                                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Hand Rolls</a>
                                </Link>
                            </nav>
                        </div>
                        <div className="menu">
                            <Route path="/sashimi" component={Sashimi} />
                            <Route path="/sushi" component={Sushi} />
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

export default SushiList;