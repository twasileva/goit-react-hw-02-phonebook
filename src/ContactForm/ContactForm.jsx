import React, { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component{
  state = {
    name: '',
    number: '',
  }

  loginInputId = nanoid();
  telInputId = nanoid()

  handleInputChange = (e) => {
    const{value, name}=e.currentTarget
    this.setState({
      [name]:value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state)

    this.reset()
  }
  
   reset() {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
const{name, number}=this.state

    return <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>Name</label><br/>
        <input
        type="text"
          name="name"
          value={name}
          id={this.loginInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        onChange={this.handleInputChange}
        /><br/>
        <label htmlFor={this.telInputId}>Number</label><br/>
        <input type="tel" name="number" value={number} id={this.telInputId} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInputChange}></input>
        <br/>
        <button type="submit">Add contact</button>
      </form>
  }
}

