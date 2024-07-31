import { useSelector, useDispatch } from 'react-redux';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ item }) {
  const { id, name, number } = item;
  useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <div className={css.userWraper}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.phoneWraper}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </>
  );
}
