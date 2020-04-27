import React from 'react';
import './styles.css';

class Sushi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sushi: [{
                name: "Abalone",
                price: 9
            }, {
                name: "Albacore Tuna",
                price: 6
            }, {
                name: "Amberjack",
                price: 8
            }, {
                name: "Eel (Fresh Water)",
                price: 6
            }, {
                name: "Eel (Salt Water)",
                price: 6
            }, {
                name: "Egg",
                price: 4
            }, {
                name: "Flying Fish Roe",
                price: 6
            }, {
                name: "Giant Clam",
                price: 15
            }, {
                name: "Golden Eye",
                price: 12
            }, {
                name: "Halibut",
                price: 6.5
            }, {
                name: "Halibut Fin",
                price: 7
            }, {
                name: "Jack Mackeral",
                price: 8
            }, {
                name: "Mackeral",
                price: 5
            }, {
                name: "Octopus",
                price: 5
            }, {
                name: "Orange Clam",
                price: 8
            }, {
                name: "Red Snapper",
                price: 6
            }, {
                name: "Salmon",
                price: 6
            }, {
                name: "Salmon Belly",
                price: 7
            }, {
                name: "Salmon Roe",
                price: 6
            }, {
                name: "Scallop",
                price: 7
            }, {
                name: "Sea Urchin",
                price: 18
            }, {
                name: "Shrimp",
                price: 5.5
            }, {
                name: "Sweet Shrimp",
                price: 16
            }, {
                name: "Smelt Roe",
                price: 6
            }, {
                name: "Surf Clam",
                price: 5.5
            }, {
                name: "Spear Squid",
                price: 6.5
            }, {
                name: "Striped Jack",
                price: 8.5
            }, {
                name: "Toro (Chu)",
                price: 13
            }, {
                name: "Toro (O)",
                price: 14
            }, {
                name: "Tuna",
                price: 6
            }, {
                name: "Yellowtail",
                price: 7
            }, {
                name: "Yellowtail Belly",
                price: 8
            }, {
                name: "Quail Egg",
                price: 1
            }]
        }
    }

    render() {
        return (
            <div>
                <h6>NIGIRI</h6>
                {this.state.sushi.map(item => (
                    <div className="sushi-menu">
                        <p className="left">{item.name}</p>
                        <p className="right">{item.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Sushi;