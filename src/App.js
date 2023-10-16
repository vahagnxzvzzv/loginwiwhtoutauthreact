import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
// import RoutePaths from "./Components/RoutePaths/RoutePaths";
import {Routes,Route, NavLink} from 'react-router-dom'
import Products from "./Components/Products/Products";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false)

  

  return (
    
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavLink   className={'login'} to={'/login'}>Login</NavLink>
    </div>
  );
}

export default App;
