import React, { Component } from 'react';
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

  render() {
    return (
      <div className="btn-group">
        <button type="button"
          className="btn btn-info myColor">All</button>
        <button type="button"
          className="btn btn-outline-secondary myColor">Active</button>
        <button type="button" 
          className="btn btn-outline-secondary myColor">Done</button>
      </div>
    )
  }
}
