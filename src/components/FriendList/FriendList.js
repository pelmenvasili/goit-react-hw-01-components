import React from 'react';
import PropTypes from 'prop-types';
import friends from '../Friends/friends.json';
import css from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline }) => (
        <li className="item" key={name}>
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
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;