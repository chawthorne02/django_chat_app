
import './App.css';
import { useState } from "react";
import Cookies from "js-cookie";
import UserLogin from './components/Login/UserLogin';
import ChatApp from './components/Login/MainApp/ChatApp';
import Container from 'react-bootstrap/Container';


function App() {
  const [auth, setAuth] = useState(!!Cookies.get("Authorization"))
  return (
   
    <Container className="main">
      <header className='slack-title'>
      <h2>Slack</h2>
      </header>
      {auth ? <ChatApp
        //  user={user}
         /> : <UserLogin setAuth={setAuth} 
        //  setUser={setUser}
         />}
        <div className='slogan'>
          <p>A Digital HQ</p>
        </div>
    </Container>
  );
}

export default App;
