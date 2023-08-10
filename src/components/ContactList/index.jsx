import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/actions';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filterOfContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ul className={css.list}>
        {filterOfContacts().map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <span>{name}</span>:<span className={css.span}>{number}</span>
              <button
                className={css.btn}
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  deleteContact: PropTypes.func,
};

export default ContactList;
