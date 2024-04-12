import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import {
  addContact,
  deleteContact, selectFilteredContacts
} from '../redux/contacts/contactsSlice';
import Loader from './Loader/Loader';

// import { selectFilteredContacts } from '../src/redux/contacts/contacts-selectors';
import { fetchContacts } from '../redux/contactsOps';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const {contacts,isLoading, error  } = useSelector(getFilteredContacts);

 const isLoading = useSelector(state=>state.contacts.loading);
 const error = useSelector(state=>state.contacts.error); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);




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





{/* <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div> */}

  return (
    <div className="blockPhonebook">
      <h1 className="titlePhonebook">Phonebook</h1>
      <div>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <h2 className="titleContacts">Contacts</h2>
      <div className="formContacts">
        <SearchBox />
        {error && <ErrorBoundary>Error message</ErrorBoundary>}
      {  isLoading && <Loader>Loading message</Loader>}
      {/* <Loader>Loading message</Loader> */}
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