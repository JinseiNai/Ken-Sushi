import React from 'react';
import './styles.css';

class Rolls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [{
                name: "Hula",
                description: "shrimp tempura, snow crab, avocado topped with spicy tuna, crushed roasted macadamia nuts, matcha crunches, sweet and spicy sauces",
                price: 24
            }, {
                name: "Mango-A-Go-Go",
                description: "grilled shrimp, crab, avocado topped with seared albacore and fresh mango salsa",
                price: 24
            }, {
                name: "Surf's Up",
                description: "spicy tuna cilantro roll topped with tuna and ceviche salsa",
                price: 24
            }, {
                name: "Twister",
                description: "spicy tuna, crab, avocado, wrapped with shredded potato fried with spicy eel sauce",
                price: 22
            }, {
                name: "Cherry Blossom",
                description: "rice-less roll with tuna, salmon, albacore, gobo wrapped with cucumber with ponzu and spicy grated daikon",
                price: 20
            }, {
                name: "Oh No But Oh Yes",
                description: "soft shell crab, avocado topped with seared ono, garlic chips and ponzu",
                price: 22
            }, {
                name: "Unagi Bonsai",
                description: "unagi, spicy tuna, crab, cream cheese, avocado roll tempura fried and topped with an herb-garlic-butter sauce",
                price: 21
            }, {
                name: "Hapa's",
                description: "spicy scallop cucumber roll topped with salmon and tobiko",
                price: 24
            }, {
                name: "Great White",
                description: "spicy crab, cucumber, avocado roll topped with albacore and spicy daikon ponzu",
                price: 22
            }, {
                name: "The Workshop Roll",
                description: "specialty roll updated weekly, ask your server for details"
            }, {
                name: "Your Name Roll",
                description: "have an idea? name it and our chefs will put it together"
            }]
        }
    }

    render() {
        return (
            <div>
                {this.state.rolls.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="price">{item.price}</span></p>
                    <i className="item-description">{item.description}</i>
                    </>
                ))}
                <i className="item-description">*all specialty rolls are made with real snow crab</i>
                <i className="item-description">*all basic rolls can be made upon request</i>
            </div>
        )
    }
}

export default Rolls;