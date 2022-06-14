import logo from './logo.svg';
import telegram from './telegram.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My First React App by SheraliTukhtayev
        </p>
        <a link="https://t.me/Sherali_1116_forever">
          <img src={telegram} className="social-network" alt="telegram" />
        </a>
      </header>
    </div>
  );
}

export default App;
