import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export function ContactList({ data, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {data.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
