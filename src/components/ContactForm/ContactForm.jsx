import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number') {
      const numericValue = value.replace(/\D/g, '');
      setNumber(numericValue);
    } else {
      setName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) {
      alert('введіть ім’я або номер');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.forma} onSubmit={handleSubmit}>
      <div>
        <label className={css.labelForm} htmlFor="name">
          Name
        </label>
        <input
          className={css.inpForm}
          value={name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          required
          placeholder="Введіть ім'я"
        />
        <label className={css.labelForm} htmlFor="number">
          Number
        </label>
        <input
          className={css.inpForm}
          value={number}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          required
          placeholder="Введіть номер"
        />
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;




// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contactsOps';
// import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';
// import css from './contactForm.module.css';
// import { nanoid } from 'nanoid';

// const INITIAL_STATE = { name: '', number: '' };

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectFilteredContacts);
//   const [state, setState] = useState({ ...INITIAL_STATE });

//   const handleChange = ({ target }) => {
//     const { name, value } = target;

//     if (name === 'number') {
//       const numericValue = value.replace(/\D/g, '');
//       if (value !== numericValue) {
//         alert('Введіть тільки цифри');
//         return;
//       }
//       setState(prevState => ({
//         ...prevState,
//         [name]: numericValue,
//       }));
//     } else {
//       setState(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const onAddContact = data => {
//     const { name, number } = data;

    
//     const isDuplicate = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase() && contact.number === number
//     );

//     if (isDuplicate) {
//       alert('Цей контакт вже існує!');
//       return;
//     }

//     dispatch(addContact(data));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onAddContact(state);
//     setState({ ...INITIAL_STATE });
//   };

//   const { name, number } = state;
//   const nameId = nanoid();
//   const telId = nanoid();

//   return (
//     <form className={css.forma} onSubmit={handleSubmit}>
//       <div>
//         <label className={css.labelForm} htmlFor={nameId}>
//           Name
//         </label>
//         <input
//           className={css.inpForm}
//           value={name}
//           onChange={handleChange}
//           id={nameId}
//           type="text"
//           name="name"
//           required
//           placeholder="Введіть ім'я"
//         />
//         <label className={css.labelForm} htmlFor={telId}>
//           Number
//         </label>
//         <input
//           className={css.inpForm}
//           value={number}
//           onChange={handleChange}
//           id={telId}
//           type="tel"
//           name="number"
//           required
//           placeholder="Введіть номер телефона"
//         />
//         <button className={css.btnForm} type="submit">
//           Add contact
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

