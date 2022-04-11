import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <canvas id="canv" width="600" height="250"></canvas>
          <img src={'https://www.svgrepo.com/show/85068/job.svg'} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/details' element={< Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
