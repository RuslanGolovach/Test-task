import React from 'react';
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
        <SvgGenerator id={id} />
        <Description>{description}</Description>
      </IconWrapper>
      <Quantity>{quantity}</Quantity>
    </Li>
  );
};

export default SideBarItem;
