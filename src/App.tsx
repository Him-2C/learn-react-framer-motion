import logo from './logo.svg';
import { createRenderer } from 'fela'
import { RendererProvider, useFela } from 'react-fela'
import createFelaRenderer from './felaRenderer';
import AppContainer from './AppContainer';
import {css} from 'otion';

const renderer = createFelaRenderer();

const App = () => {
  const styles = css({
    display: ''
  })
  return (
    <RendererProvider renderer={renderer}>
      <AppContainer />
    </RendererProvider>
  );
}

export default App;
