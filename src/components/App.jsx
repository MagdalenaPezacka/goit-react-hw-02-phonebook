import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFilter } from './ContactFilter/ContactFilter';

import css from './App.module.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = this.state.contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, event],
      }));
    }
  };
  render() {
    // const { filter } = this.state;

    return (
      <section className={css.content}>
        <div className={css.content__container}>
          <ContactForm addContact={this.addContact} />

          <h2>Contacts</h2>
          {/* <Filter ... />
  <ContactList ... /> */}
        </div>
      </section>
    );
  }
}
