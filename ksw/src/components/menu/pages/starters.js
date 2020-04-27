import React from 'react';
import Starters from '../starters';
import Appetizers from '../appetizers';

class StartersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <Starters />
                <Appetizers />
            </div>
        )
    }
}

export default StartersPage;