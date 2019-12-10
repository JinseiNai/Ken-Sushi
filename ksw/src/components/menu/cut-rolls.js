import React from 'react';
import './styles.css';

class CutRolls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [{
                name: "Hula",
                price: 24
            }, {
                name: "Mango-A-Go-Go",
                price: 24
            }, {
                name: "Surf's Up",
                price: 24
            }, {
                name: "Twister",
                price: 22
            }, {
                name: "Cherry Blossom",
                price: 20
            }, {
                name: "Oh No But Oh Yesss",
                price: 22
            }, {
                name: "Unagi Bonsai",
                price: 21
            }, {
                name: "Hapa's",
                price: 24
            }, {
                name: "Great White",
                price: 22
            }, {
                name: "Battera",
                price: 15
            }, {
                name: "California",
                price: 6
            }, {
                name: "Crab California",
                price: 10
            }, {
                name: "Double Double (T.Y.S.)",
                price: 20
            }, {
                name: "Futomaki",
                price: 15
            }, {
                name: "Spicy Tuna",
                price: 13
            }, {
                name: "Spicy Yellowtail",
                price: 13
            }, {
                name: "Spicy Salmon",
                price: 13
            }, {
                name: "Spicy Scallop",
                price: 17
            }, {
                name: "Vegetable",
                price: 10
            }, {
                name: "Philadelphia Roll",
                price: 12
            }, {
                name: "Rainbow Roll",
                price: 17
            }, {
                name: "Crunchy Roll",
                price: 14
            }, {
                name: "Soft Shell Crab",
                price: 16
            }, {
                name: "Salmon Skin",
                price: 12
            }, {
                name: "Caterpillar",
                price: 16
            }, {
                name: "Workshop"
            }]
        }
    }

    render() {
        return (
            <div>
                <h6>CUT ROLLS</h6>
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

export default CutRolls;