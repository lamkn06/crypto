import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouterAuthenticator = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          loading ? (
            <label>loading</label>
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default observer(RouterAuthenticator);
