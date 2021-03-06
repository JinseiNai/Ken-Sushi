import React from 'react';
import './styles.css';

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
            }]
        }
    }

    render() {
        return (
            <div>
                <div className="menu-title">
                    <p>SALAD &amp; SOUPS</p>
                </div>
                {this.state.starters.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="price">{item.price}</span></p>
                    <i className="item-description">{item.description}</i>
                    </>
                ))}
            </div>
        )
    }
}

export default Starters;