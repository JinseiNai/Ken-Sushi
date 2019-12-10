import React from 'react';
import './styles.css';

class HandRolls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [{
                name: "Chopped Toro",
                price: 12
            }, {
                name: "Eel",
                price: 9
            }, {
                name: "Fermented Soy (Natto)",
                price: 7
            }, {
                name: "Salmon Skin",
                price: 8
            }, {
                name: "Shrimp Tempura",
                price: 8
            }, {
                name: "Soft Shell Crab",
                price: 10
            }, {
                name: "Spicy Tuna",
                price: 9
            }, {
                name: "Spicy Yellowtail",
                price: 8
            }, {
                name: "Spicy Salmon",
                price: 9
            }, {
                name: "Spicy Scallop",
                price: 11
            }, {
                name: "Spicy Tuna & Eel",
                price: 13
            }, {
                name: "Uni",
                price: 24
            }, {
                name: "Uni & Giant Clam",
                price: 26
            }, {
                name: "Uni & Salmon Egg",
                price: 22
            }, {
                name: "Ume Shiso Yamaimo",
                price: 6
            }]
        }
    }

    render() {
        return (
            <div>
                <h6>HAND ROLLS</h6>
                {this.state.map(item => (
                    <div className="sushi-menu">
                        <p className="left">{item.name}</p>
                        <p className="right">{item.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default HandRolls;