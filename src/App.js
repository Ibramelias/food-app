import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BagProvider } from './context/BagContext';
import HomePage from './components/HomePage';
import RestaurantDetail from './components/RestaurantDetail';
import ItemDetail from './components/ItemDetail';
import Bag from './components/Bag';
import './App.css';

function App() {
  return (
    <BagProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/restaurant/:restId/item/:itemId" element={<ItemDetail />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BagProvider>
  );
}

export default App;
