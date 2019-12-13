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
                        <div>
                            <Link to="/sushi">
                                <button>Sushi</button>
                            </Link>
                            <Link to="/sashimi">
                                <button>Sashimi</button>
                            </Link>
                            <Link to="/cut-rolls">
                                <button>Cut Rolls</button>
                            </Link>
                            <Link to="/small-rolls">
                                <button>Small Rolls</button>
                            </Link>
                            <Link to="/hand-rolls">
                                <button>Hand Rolls</button>
                            </Link>
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