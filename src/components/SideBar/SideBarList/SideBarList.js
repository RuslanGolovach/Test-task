import React, { useState } from 'react';
import SideBarItem from './SideBarItem';
import { Ul } from './stylesList';

const SideBarList = ({ data }) => {
  const [isActive, setIsActive] = useState(null);

  const onClick = id => {
    setIsActive(id);
  };
  return (
    <Ul>
      {data.map(({ id, ...props }) => (
        <SideBarItem
          key={id}
          id={id}
          {...props}
          onClick={onClick}
          isActive={isActive}
        />
      ))}
    </Ul>
  );
};

export default SideBarList;
