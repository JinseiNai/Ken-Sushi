import React from 'react';
import Starters from '../menu/starters';
import Appetizers from '../menu/appetizers';

function Homepage() {
    return (
        <div>
            <h1>Ken Sushi Workshop</h1>
            <Starters></Starters>
            <Appetizers></Appetizers>
        </div>
    )
}

export default Homepage;