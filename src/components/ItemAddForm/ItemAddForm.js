import React, { Component } from 'react';
import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  state ={
    value: ''
  }
  onLableChange = (e) => {
    this.setState({ value: e.target.value });
  }

  onSubmit =(e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.value)
    this.setState({ value: '' });
  }

  render() {
    return(
      <form className="item-add-form d-flex" 
      onSubmit={ this.onSubmit }>

        <input type="text"
          className="form-control item-add-form-input"
          onChange={ this.onLableChange }
          placeholder="What needs to be done"
          value={ this.state.value }
          />

        <button 
          className="btn btn-primary myBtn"
          >Add item</button>
      </form>
    )
  }
}
