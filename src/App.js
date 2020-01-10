import logo from './logo.svg';
import './App.css';
import CartList from './components/card-list/card-list.component';

import React, { Component } from 'react'
import SearchBox from './components/search/search-box.component';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(datas => this.setState({ monsters: datas }));
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className='App'>
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monster...' 
          handleChange={this.handleSearchChange}
        />
        <CartList monsters={filteredMonters}></CartList>
      </div>
    )
  }
}

