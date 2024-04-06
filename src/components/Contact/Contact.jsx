import { useDispatch } from 'react-redux';
import css from './contact.module.css';
import { deleteContact } from '../../redux/contacts/contacts-slice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactsItem}>
      {name} {number}
      <button className={css.btnItem} onClick={handleDelete} type="button">
        X
      </button>
    </li>
  );
};

export default Contact;