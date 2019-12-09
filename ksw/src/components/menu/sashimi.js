import React from 'react';
import './styles';

class Sashimi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sashimi: [{
                name: "Tuna 5pc",
                price: 16
            }, {
                name: "Chu Toro 2pc",
                price: 13
            }, {
                name: "O Toro 2pc",
                price: 14
            }, {
                name: "Albacore 5pc",
                price: 16
            }, {
                name: "Eel 5pc",
                price: 16
            }, {
                name: "Sweet Shrimp 2pc",
                price: 28
            }, {
                name: "Yellowtail 5pc",
                price: 18
            }, {
                name: "Yellowtail Belly 5pc",
                price: 20
            }, {
                name: "Salmon 5pc",
                price: 16
            }, {
                name: "Salmon Belly 5pc",
                price: 18
            }, {
                name: "Giant Clam 5pc",
                price: 32
            }, {
                name: "Jack Mackeral",
                price: 24
            }, {
                name: "Sea Urchin",
                price: 40
            }, {
                name: "T.Y.",
                price: 18
            }, {
                name: "T.Y.S.",
                price: 18
            }, {
                name: "Chef's Choice",
                price: 48
            }, {
                name: "Belly Sampler",
                price: 35
            }, {
                name: "Ankimo",
                price: 10
            }]
        }
    }

    render() {
        return (
            <div>
                <h6>SASHIMI</h6>
                {this.state.sashimi.map(item => (
                    <div className="sushi-menu">
                        <p className="left">{item.name}</p>
                        <p className="right">{item.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Sashimi;