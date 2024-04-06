import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { name: '', number: '' };

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'number') {
      const numericValue = value.replace(/\D/g, '');
      if (value !== numericValue) {
        alert('Введіть тільки цифри');
        return;
      }
      setState(prevState => ({
        ...prevState,
        [name]: numericValue,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onAddContact = data => {
    const { name, number } = data;

    
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() && contact.number === number
    );

    if (isDuplicate) {
      alert('Цей контакт вже існує!');
      return;
    }

    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(state);
    setState({ ...INITIAL_STATE });
  };

  const { name, number } = state;
  const nameId = nanoid();
  const telId = nanoid();

  return (
    <form className={css.forma} onSubmit={handleSubmit}>
      <div>
        <label className={css.labelForm} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.inpForm}
          value={name}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          required
          placeholder="Введіть ім'я"
        />
        <label className={css.labelForm} htmlFor={telId}>
          Number
        </label>
        <input
          className={css.inpForm}
          value={number}
          onChange={handleChange}
          id={telId}
          type="tel"
          name="number"
          required
          placeholder="Введіть номер телефона"
        />
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;