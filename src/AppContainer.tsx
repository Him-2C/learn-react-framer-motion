import {IStyle} from 'fela';
import {CssFunction, useFela} from 'react-fela';
import logo from './logo.svg';
const AppContainer: React.FC = () => {
  const {css} = useFela();

  return (
    <div className={css({display: ''})}>
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
}
export default AppContainer;
