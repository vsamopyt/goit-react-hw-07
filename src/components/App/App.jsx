import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import BarLoader from 'react-spinners/BarLoader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsLoaded, selectIsError} from '../../redux/contactsSlice';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoaded);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appWraper}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <div className={css.appLoader}> <BarLoader /> </div>}  
       {/* <p>Please wait data is loading</p>  */}
      {isError && <p>There is a mistake plese reload the page</p>}
      <ContactList />
    </div>
  );
}

export default App;
