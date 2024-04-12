// import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact, selectFilteredContacts } from '../../redux/contacts/contactsSlice';
import css from './contactList.module.css';
// import selectFilteredContacts from '../../redux/contacts/contactsSlice';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ol className={css.allContact}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ol>
  );
};

export default ContactList;
