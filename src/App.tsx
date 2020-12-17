import React from 'react';
import {RendererProvider} from 'react-fela';
import createFelaRenderer from './services/felaRenderer';
import AppContainer from './AppContainer';
import 'modern-normalize/modern-normalize.css';

const renderer = createFelaRenderer();

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <AppContainer />
    </RendererProvider>
  );
};

export default App;
