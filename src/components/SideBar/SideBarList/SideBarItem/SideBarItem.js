import React, { useState } from 'react';
import icons from './icons';
import sprite from '../../../../icon/sprite.svg';
import {
  Item,
  IconWrapper,
  Description,
  Quantity,
  ActiveItem,
} from './stylesItem';

const SideBarItem = ({ description, quantity }) => {
  const [isActive, setIsActive] = useState(false);
  const Li = isActive ? ActiveItem : Item;

  const onLiClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Li onClick={onLiClick}>
      <IconWrapper>
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
