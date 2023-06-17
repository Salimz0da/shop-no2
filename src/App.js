import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';

function App() {
  return (
    <div className="App">
      <Link to={"/"}>Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/" element={<Product />} /> */}
      </Routes>

    </div>
  );
}

export default App;
