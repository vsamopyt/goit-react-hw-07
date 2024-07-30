import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchContacts} from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const selectorIsLoading = useSelector(state => state.contacts.loading);
const selectorIsError = useSelector (state => state.contacts.error);

  useEffect(()=>{
    dispatch(fetchContacts())

  },[dispatch]);

  return (
    <div className={css.appWraper}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {selectorIsLoading && <p>Please wait data is loading</p>}
      {selectorIsError && <p>There is a mistake plese reload the page</p>}
      <ContactList />
    </div>
  );
}

export default App;
