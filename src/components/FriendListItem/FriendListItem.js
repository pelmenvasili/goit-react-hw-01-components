import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
          <span
            className={`${css.status} ${isOnline ? css.online : css.offline}`}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt={`${name} avatar`}
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;