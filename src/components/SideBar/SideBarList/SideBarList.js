import React from 'react';
import SideBarItem from './SideBarItem';
import { ListWrapper } from './stylesList';

const SideBarList = ({ data }) => {
  return (
    <ListWrapper>
      {data.map(({ id, description, quantity }) => (
        <SideBarItem key={id} description={description} quantity={quantity} />
      ))}
    </ListWrapper>
  );
};

export default SideBarList;
