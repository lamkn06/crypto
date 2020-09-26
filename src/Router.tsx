import { observer } from 'mobx-react';
import React from 'react';
import { Switch, useLocation, withRouter } from 'react-router-dom';

import loadable from '@loadable/component';

import RouterAuthenticator from './RouterAuthenticator';

// import RouterPublic from "./RouterPublic";

const HomePage = loadable(() => import('./pages/HomePage/HomePage'));

const Router = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Switch location={location}>
        <RouterAuthenticator children={<HomePage />} />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(observer(Router));
