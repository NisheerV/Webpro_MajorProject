// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Dept from './pages/dept';
import Emp from './pages/emp';
import Home from './pages/home';
import Reg from './pages/reg';
import Update from './pages/update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dept" exact element={<Dept />} />
          <Route path="/emp" exact element={<Emp />} />
          <Route path="/update" exact element={<Update />} />
          <Route path="/reg" exact element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
