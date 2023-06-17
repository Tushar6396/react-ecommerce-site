import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
