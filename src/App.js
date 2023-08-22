import './App.css';
import { useState } from 'react';
import ChatIcon from './components/chatIcon/ChatIcon.jsx';
import ChatCrad from './components/chatCard/ChatCard.jsx';
import ChatWindow from './components/chatWindow/ChatWindow';

function App() {
  const[show, setShow]=useState(false)
  const handleShowChat =()=>{
    setShow(!show)
  }
  return (
   <>
    <div>
      {show ?<ChatCrad handleShowChat={handleShowChat}/> : <ChatIcon handleShowChat={handleShowChat}/>}
    </div>
     {/* <ChatWindow/> 
       <ChatIcon/>
      <ChatCrad/>  */}
   </>
  );
}

export default App;