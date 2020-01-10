import React, { Component } from 'react';
import './card.style.css';

export default class Card extends Component {
    render() {
        return (
            <div className='card-container'>
                <img alt='monster' src={'https://robohash.org/'+this.props.monster.id+'?set=set2&size=180x180'}/>
                <h3>{this.props.monster.name}</h3>
                <p>{this.props.monster.email}</p>
            </div>
        )
    }
}
