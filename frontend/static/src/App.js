
import './App.css';
import { useState } from "react";
import Cookies from "js-cookie";
import UserLogin from './components/Login/UserLogin';

function App() {
  const [auth, setAuth] = useState(!!Cookies.get("Authorization"))
  return (
   
    <div className="main">
      
    </div>
  );
}

export default App;
