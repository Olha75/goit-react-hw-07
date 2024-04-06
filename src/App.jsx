// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import {
  addContact,
  deleteContact,
} from '../src/redux/contacts/contacts-slice';
// import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../src/redux/contacts/contacts-selectors';
// import css from '../index.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert('Цей контакт вже існує!');
    }
    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="blockPhonebook">
      <h1 className="titlePhonebook">Phonebook</h1>
      <div>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <h2 className="titleContacts">Contacts</h2>
      <div className="formContacts">
        <SearchBox />
        {contacts.length > 0 ? (
          <ContactList items={contacts} deleteContact={onDeleteContact} />
        ) : (
          <p className="message">No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default App;