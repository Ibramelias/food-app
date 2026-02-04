import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BagProvider } from './context/BagContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import RestaurantDetail from './components/RestaurantDetail';
import ItemDetail from './components/ItemDetail';
import Bag from './components/Bag';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BagProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/restaurant/:restId/item/:itemId" element={<ItemDetail />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BagProvider>
    </AuthProvider>
  );
}

export default App;
