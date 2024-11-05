//import { useState } from 'react'
import ChatPage from './chat-page/ChatPage';
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import LoginPage from './login-page/LoginPage';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
