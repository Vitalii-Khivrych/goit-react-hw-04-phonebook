import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export function ContactItem({ name, number, onClick }) {
  return (
    <>
      <p className={s.text}>
        {name}: {number}{' '}
      </p>
      <button className={s.btn} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
