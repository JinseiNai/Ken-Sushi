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
            <div>
                <Entrees></Entrees>
                <Omakase></Omakase>
            </div>
        )
    }
}

export default EntreesPage;