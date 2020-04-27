import React from 'react';
import Entrees from '../entrees';
import Omakase from '../omakase';

class EntreesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="menu-title">
                    <p>ENTREES</p>
                    <em className="item-description">*served with miso soup</em>
                </div>
                <Entrees></Entrees>
                <div className="menu-title">
                    <p>OMAKASE</p>
                    <em className="item-description">"entrust" our chefs with a unique dining experience</em>
                </div>
                <Omakase></Omakase>
            </div>
        )
    }
}

export default EntreesPage;