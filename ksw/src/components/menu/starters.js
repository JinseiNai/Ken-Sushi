import React from 'react';

// function getItem() {
//     for (i = 0; i < starters.length; i++) {
//         let div = $('<div>');
//         let name = $('<h3></h3>').text(starters[i].name);
//         let description = $('<i></i>').text(starters[i].description);
//         let price = $('<p></p>').text(starters[i].price);
//         div.append(name + description + price);
//     }
// }

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
            }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.starters.map(item => (
                <>
                <p>{item.name} {item.price}</p>
                <i>{item.description}</i>
                </>
                ))}
            </div>
        )
    }
}

export default Starters;