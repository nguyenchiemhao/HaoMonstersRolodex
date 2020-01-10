import React, { Component } from 'react';

import './card-list.style.css';
import Card from '../card/card.component';

export default class CartList extends Component {
    constructor() {
        super();
        console.log('here is...');
        
    }
    componentDidUpdate(){
        console.log(this.props.monsters);
    }

    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map(monster =>
                        <Card key={monster.id} monster={monster}></Card>
                    )
                }
            </div>
        )
    }
}
