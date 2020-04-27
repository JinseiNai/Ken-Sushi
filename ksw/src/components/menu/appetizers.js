import React from 'react';
import './styles.css';

class Appetizers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appetizers: [{
                name: "Edamame",
                description: "sea salt or garlic sautéed",
                price: "4 / 6"
            }, {
                name: "Tofu Steak",
                description: "grilled tofu steak with sesame oil soy sauce",
                price: 10
            }, {
                name: "Brussels / Maybe Bacon",
                description: "brussel sprouts sautéed in light garlic soy, bacon is optional",
                price: "6 / 12"
            }, {
                name: "Spicy Seafood Salad",
                description: "fresh seafood with cucumber, gobo, kaiware and seaweed in a spicy ponzu sauce",
                price: 20
            }, {
                name: "Gyoza - Housemade or Beef",
                description: "pan fried or steamed dumplings",
                price: "10 / 6"
            }, {
                name: "Kama",
                description: "grilled yellowtail or salmon cheek",
                price: 12
            }, {
                name: "Shumai",
                description: "steamed shrimp dumplings",
                price: 6
            }]
        }
    }

    render() {
        return (
            <div>
                <div className="menu-title">
                    <p>APPETIZERS</p>
                </div>
                {this.state.appetizers.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="price">{item.price}</span></p>
                    <i className="item-description">{item.description}</i>
                    </>
                ))}
            </div>
        )
    }
}

export default Appetizers;