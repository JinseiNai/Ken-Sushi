import React from 'react';
import Rolls from '../rolls';

class RollsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="menu-title">
                    <p>SPECIALTY ROLLS</p>
                </div>
                <Rolls></Rolls>
            </div>
        )
    }
}

export default RollsPage;