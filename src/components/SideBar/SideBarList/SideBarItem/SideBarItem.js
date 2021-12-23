import React from 'react';
import icons from './icons';
import sprite from '../../../../icon/sprite.svg';
// import { ReactComponent as IconLogs } from '../../../../icon/logs.svg';
import {
  Item,
  IconWrapper,
  Description,
  Quantity,
  ActiveItem,
} from './stylesItem';

const SideBarItem = ({ id, description, quantity, onClick, isActive }) => {
  const Li = isActive === id ? ActiveItem : Item;

  return (
    <Li onClick={() => onClick(id)}>
      <IconWrapper>
        {/* <img src={icon} alt="" /> */}

        <svg width="18" height="18">
          <use xlinkHref={`${sprite}#${icons[description]}`} />
        </svg>

        <Description>{description}</Description>
      </IconWrapper>

      <Quantity>{quantity}</Quantity>
    </Li>
  );
};

export default SideBarItem;
