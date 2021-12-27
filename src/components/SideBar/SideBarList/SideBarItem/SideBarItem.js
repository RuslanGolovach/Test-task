import React from 'react';

import { Item, IconWrapper, Description, Quantity } from './stylesItem';

const SideBarItem = ({
  id,
  description,
  quantity,
  Icon,
  onClick,
  isActive,
}) => {
  const onLiClick = () => {
    onClick(id);
  };

  return (
    <Item onClick={onLiClick} isActive={isActive}>
      <IconWrapper>
        <Icon />
        <Description>{description}</Description>
      </IconWrapper>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
};

export default SideBarItem;
