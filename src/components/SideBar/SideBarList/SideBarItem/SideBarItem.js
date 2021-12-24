import React from 'react';
import icons from './icons';
import SvgGenerator from './SvgGenerator';

import {
  Item,
  IconWrapper,
  Description,
  Quantity,
  ActiveItem,
} from './stylesItem';

const SideBarItem = ({ id, description, quantity, onClick, isActive }) => {
  const Li = isActive === id ? ActiveItem : Item;
  const onLiClick = () => {
    onClick(id);
  };

  return (
    <Li onClick={onLiClick}>
      <IconWrapper>
        <SvgGenerator id={icons[description]} />
        <Description>{description}</Description>
      </IconWrapper>
      <Quantity>{quantity}</Quantity>
    </Li>
  );
};

export default SideBarItem;
