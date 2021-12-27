import React from 'react';
import { ReactComponent as IconAssets } from '../../../../icon/assets.svg';
import { ReactComponent as IconApplications } from '../../../../icon/applications.svg';
import { ReactComponent as IconIdentities } from '../../../../icon/identities.svg';
import { ReactComponent as IconAccounts } from '../../../../icon/accounts.svg';
import { ReactComponent as IconLogs } from '../../../../icon/logs.svg';

const SvgGenerator = ({ id }) => {
  switch (id) {
    case 0:
      return <IconAssets />;
    case 1:
      return <IconApplications />;
    case 2:
      return <IconIdentities />;
    case 3:
      return <IconAccounts />;
    case 4:
      return <IconLogs />;
    default:
      return <svg></svg>;
  }
};

export default SvgGenerator;
