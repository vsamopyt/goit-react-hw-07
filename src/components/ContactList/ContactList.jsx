import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// redux -------
export default function ContactList() {
  const contactList = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.name);
  const selectedContactList = contactList.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

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
