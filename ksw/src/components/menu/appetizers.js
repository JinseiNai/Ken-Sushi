import React from 'react';

class Appetizers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appetizers: [{
                name: "Edamame",
                description: "sea salt or garlic sauteed"
            }]
        }
    }
}