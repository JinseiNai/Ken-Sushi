import React from 'react';
import './styles.css';

class SmallRolls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [{
                name: "Chopped Toro",
                price: 12
            }, {
                name: "Cucumber",
                price: 6
            }, {
                name: "Fermented Soy (Natto)",
                price: 6
            }, {
                name: "Scallion, Yellowtail",
                price: 9
            }, {
                name: "Pickled Radish",
                price: 6
            }, {
                name: "Tuna",
                price: 10
            }, {
                name: "Ume Shiso Yamaimo",
                price: 6
            }, {
                name: "Avocado",
                price: 7
            }, {
                name: "Salmon",
                price: 10
            }]
        }
    }

    render() {
        return (
            <div>
                <h6>SMALL ROLLS</h6>
                {this.state.rolls.map(item => (
                    <div className="sushi-menu">
                        <p className="left">{item.name}</p>
                        <p className="right">{item.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default SmallRolls;