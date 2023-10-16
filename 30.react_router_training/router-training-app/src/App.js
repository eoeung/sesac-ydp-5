import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';
import MainPage from './pages/MainPage';
import PhotoPage from './pages/PhotoPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/photos" element={<PhotoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
