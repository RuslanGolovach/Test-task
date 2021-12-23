import React from 'react';
import SideBarItem from './SideBarItem';
import { Ul } from './stylesList';

const SideBarList = ({ data }) => {
  return (
    <Ul>
      {data.map(({ id, description, quantity }) => (
        <SideBarItem key={id} description={description} quantity={quantity} />
      ))}
    </Ul>
  );
};

export default SideBarList;
