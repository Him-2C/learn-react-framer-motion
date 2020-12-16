import React from 'react';
import {CssFunction, useFela} from 'react-fela';
import logo from './assets/logo.svg';

const AppContainer: React.FC = () => {
  const {css} = useFela();
  const styles = createSylesSheet(css);

  return (
    <div className={styles.Container}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const createSylesSheet = <T, P>(css: CssFunction<T, P>) => ({
  Container: css({
    textAlign: 'center',
  }),
});
export default AppContainer;
