import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './Components/Shop';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
