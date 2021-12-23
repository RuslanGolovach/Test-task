import React from 'react';

import SideBarList from './SideBarList';
import data from '../../data';
import { TitleWrapper, Title, SideBarWrapper } from './stylesSideBar';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <TitleWrapper>
        <Title>Inventory </Title>
      </TitleWrapper>
      <SideBarList data={data} />
    </SideBarWrapper>
  );
};

export default SideBar;
