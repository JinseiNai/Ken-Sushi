import React from 'react';

class Starters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starters: [{
                name: "Organic Garden",
                description: "organic baby greens with yuzu ginger dressing",
                price: 6
            }, {
                name: "Tofu Salad",
                description: "tofu and garden salad with wasabi yuzu oil",
                price: 8
            }, {
                name: "Hiyashi Wakame",
                description: "seaweed salad in  sesame vinaigrette",
                price: 8
            }, {
                name: "Miso Soup",
                price: 2
            }, {
                name: "Red Miso Soup",
                price: 4
            }, {
                name: "Clam Miso Soup",
                price: 6
            }
            ]
        }
    }
    render() {
        return (
            <div>
                <h4>Starters</h4>
                {this.state.starters.map(item => (
                <>
                <p>{item.name}   {item.price}</p>
                <i>{item.description}</i>
                </>
                ))}
            </div>
        )
    }
}

export default Starters;