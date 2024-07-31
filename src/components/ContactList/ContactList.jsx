import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const selectedContactList = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {selectedContactList.map(item => {
        return (
          <li key={item.id} className={css.itemWraper}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}
