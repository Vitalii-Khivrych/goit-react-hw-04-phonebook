import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactList.styled';

export function ContactList({ data, onDeleteContact }) {
  return (
    <List>
      {data.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
