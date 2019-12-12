import React from 'react';
import './styles.css';

class Entrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entrees: [{
                name: "*Tobiko Sizzler",
                description: "rice served in a sizzling stone pot topped with tobiko, uni, ikura and butter sauce",
                price: 30
            }, {
                name: "*Nigiri Combination",
                description: "tuna, albacore, salmon, yellowtail, halibut, eel, shrimp sushi and a california roll",
                price: 27
            }, {
                name: "*Chef's Choice Nigiri",
                price: 40
            }, {
                name: "*Ken Sushi Workshop Sashimi Plate",
                price: 48
            }, {
                name: "*Chicken Teriyaki",
                price: 16
            }, {
                name: "*Salmon Teriyaki",
                price: 25
            }, {
                name: "*Beef Teriyaki",
                price: 21
            }, {
                name: "Udon",
                description: "udon noodles with shrimp and vegetable tempura",
                price: 12
            }]
        }
    }

    render() {
        return (
            <div>
                <p>ENTREES</p>
                <i className="item-description">*served with miso soup</i>
                {this.state.entrees.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="space">&nbsp;</span> {item.price}</p>
                    <i className="item-description">{item.description}</i>
                    </>
                ))}
            </div>
        )
    }
}

export default Entrees;