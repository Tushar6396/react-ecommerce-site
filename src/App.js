import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import {  ShopContextProvider } from './Components/ShopContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider >
        <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </ShopContextProvider>
      </Router>

    </div>
  );
}

export default App;
