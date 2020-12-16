import { RendererProvider } from 'react-fela'
import createFelaRenderer from './felaRenderer';
import AppContainer from './AppContainer';

const renderer = createFelaRenderer();

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <AppContainer />
    </RendererProvider>
  );
}

export default App;
