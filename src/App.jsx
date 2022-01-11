import React, { Component } from "react";
import { nanoid } from "nanoid";

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
  }
  
  loginInputId = nanoid();
  telInputId = nanoid()
  filterInputId=nanoid()

  handleInputChange = (e) => {
    const{value, name}=e.currentTarget
    this.setState({
      [name]:value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    const addContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }
    this.setState(prevState =>( {
      contacts:[addContact, ...prevState.contacts],
    }))

    this.reset()
  }
  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }
  
  reset() {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const{name, contacts,number, filter}=this.state
    return <div>
    <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
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
      <label htmlFor={this.filterInputId}>Find contacts by name</label><br/>
        <input type="text" name="filter" value={filter} id={this.filterInputId} onChange={this.changeFilter}></input><br/>


      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return <li key={contact.id}>{`${ contact.name}: ${contact.number}`}</li>
      })}
      </ul>
    </div>
  }
}