import React from 'react';
import './styles.css';

class Tapas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tapas: [{
                name: "Salmon Crudo",
                description: "micro greens and avocado with grape-seed oil, black lava salt, yuzu juice",
                price: 25
            }, {
                name: "Amberjack Tiradito",
                description: "wasabi vinaigrette, truffle oil",
                price: 22
            }, {
                name: "Triple Belly Sampler",
                description: "tuna toro, salmon toro and yellowtail toro",
                price: 35
            }, {
                name: "Oysters on the Half Shell 1/2 dozen",
                description: "kumamoto (6pcs) with ponzu",
                price: 18
            }, {
                name: "Tuna-Squared (Tuna Poke)",
                description: "tuna, cucumbers, seaweed salad, tobiko in sweet yuzu peppery soy sauce",
                price: 22
            }, {
                name: "Kurobuta Sausage",
                description: "pan grilled with dipping sauces (ponzu and mustard)",
                price: 9
            }, {
                name: "Oxtail Toban",
                description: "braised oxtail and seasonal vegetables simmered in a sweet soy broth",
                price: 22
            }, {
                name: "Crispy Rice",
                description: "crispy rice patties topped with spicy tuna",
                price: 18
            }, {
                name: "Creamy Shrimp and Lobster",
                description: "lobster and shrimp tempura with a sweet and spicy miso aioli",
                price: 21
            }, {
                name: "Kobe Beef Sashimi",
                description: "kobe beef tataki with garlic ponzu sauce",
                price: 23
            }, {
                name: "Chilean Sea Bass Misoyaki",
                description: "grilled miso marinated sea bass",
                price: 16
            }, {
                name: "Ankimo",
                description: "monkfish pate with citrus soy sauce",
                price: 10
            }]
        }
    }

    render() {
        return (
            <div>
                <h5>SPECIAL TAPAS</h5>
                {this.state.tapas.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="space">&nbsp;</span> {item.price}</p>
                    <i className="item-description">{item.description}</i>
                    </>
                ))}
            </div>
        )
    }
}

export default Tapas;