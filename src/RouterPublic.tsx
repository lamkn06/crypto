import { observer } from 'mobx-react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useRootStore } from './rootStore';

const RouterPublic = ({ children, ...rest }) => {
  const rootStore = useRootStore();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        false ? (
          <React.Fragment>{children}</React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default observer(RouterPublic);
