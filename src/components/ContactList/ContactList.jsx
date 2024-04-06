// import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import css from './contactList.module.css';


const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

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
