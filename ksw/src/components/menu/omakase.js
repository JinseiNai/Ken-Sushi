import React from 'react';
import './styles.css';

class Omakase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            omakase: [{
                name: "Love Omakase",
                price: 120
            }, {
                name: "Pride Omakase",
                price: 150
            }]
        }
    }

    render() {
        return(
            <div>
                {this.state.omakase.map(item => (
                    <>
                    <p className="item-name">{item.name} <span className="price">{item.price}</span></p>
                    {/* <i className="item-description">{item.price}</i> */}
                    </>
                ))}
            </div>
        )
    }
}

export default Omakase;