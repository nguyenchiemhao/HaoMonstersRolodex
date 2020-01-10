import React, { Component } from 'react'
import './search-box.style.css';

export default class SearchBox extends Component {
    render() {
        const {placeholder, handleChange} = this.props;
        return (
            <div>
                <input
                className='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
            </div>
        )
    }
}
