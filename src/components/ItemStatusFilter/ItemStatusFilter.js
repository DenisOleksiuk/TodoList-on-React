import React, { Component } from 'react';
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {
  state = {
    filter: ''
  }

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  setFilter = (e) => {
    const valueFilter = e.target.textContent.toLowerCase();
    this.setState({filter: valueFilter});
    this.props.onSetFilter(valueFilter)
  }

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({ name, label}) => {
      const isLabel = filter === name;
      const clazz = isLabel ? 'btn-info' : 'btn-outline-secondary';
      return (
      <button type="button"
        key={name}
        className={`btn ${clazz}`}>{label}</button>
      )
    });
    return (
      <div className="btn-group" onClick={ this.setFilter }>
      { buttons }
      </div>
    )
  }
}
