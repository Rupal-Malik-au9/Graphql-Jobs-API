import './App.css';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <canvas id="canv" width="600" height="250"></canvas>
        <img src={'https://www.svgrepo.com/show/85068/job.svg'} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
