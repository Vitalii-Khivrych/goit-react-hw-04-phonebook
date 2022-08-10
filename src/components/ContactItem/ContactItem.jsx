import PropTypes from 'prop-types';
import { Text, Button } from './ContactItem.styled';

export function ContactItem({ name, number, onClick }) {
  return (
    <>
      <Text>
        {name}: {number}{' '}
      </Text>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
