import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts, selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
import { selectFilter } from "../../redux/filtersSlice";

// redux -------
export default function ContactList() {

  // const contactList = useSelector((state) => state.contacts.items);
 
  // const selectNameFilter = useSelector((state) => state.filter.name);


  // const contactList = useSelector(selectContacts);
  //  const selectNameFilter = useSelector(selectFilter);
  // const selectedContactList = contactList.filter((item) =>
  //   item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  // );

  const selectedContactList = useSelector(selectFilteredContacts)

  return (
    <ul className={css.contactList}>
      {selectedContactList.map((item) => {
        return (
          <li key={item.id} className={css.itemWraper}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}
