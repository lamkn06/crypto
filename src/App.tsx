import '@trueprofile.io/ui/build/assets/css/font.css';
import '@trueprofile.io/ui/build/assets/css/normalize.css';
import '@trueprofile.io/ui/build/assets/css/global.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/css/reset.css';
import './assets/css/font.css';
import './assets/css/global.scss';

import { observer } from 'mobx-react';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Provider } from './rootStore';
import Router from './Router';

const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <Provider>
        <Suspense fallback={<div />}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </Container>
  );
};

export default observer(App);
