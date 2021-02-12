import React, { Component } from 'react'
import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render() {
    const searchText = 'Type here for search';
    return (
      <input
        className="form-control search-input"
        type="text" 
        onChange={ this.onSearchChange }
        value={this.state.term}
        placeholder={searchText}
      />
    )
  }
}
