import logo from './logo.svg';
import telegram from './telegram.png';
import github from './github.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My First React App by SheraliTukhtayev
        </p>
        <p>
          Sherali's social network accounts
        </p>
        <ul>
          <li>
            <a href="https://t.me/Sheralitukhtayev" target="_blank" rel="noreferrer">
              <img src={telegram} className="social-network" alt="telegram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sheralitukhtayev" target="_blank" rel="noreferrer">
              <img src={github} className="social-network" alt="github" />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
