import React, { useState } from 'react';
import chatIcon from '../../images/ChatIcon.png';
import '../../components/chatIcon/ChatIcon.css';

const ChatIcon = ({ handleShowChat }) => {
  const [statusCardVisible, setStatusCardVisible] = useState(true);
  function closeStatusCard() {
    setStatusCardVisible(false);
  }
  return (
    <div className="img">
      {statusCardVisible && (
        <div className="status-card">
          <button className="close-button" onClick={closeStatusCard}>×</button>
          <div className="status-text">We're online!</div>
          <div className="assist-text">How may I help you today?</div>
          <div className="arrow"></div>
        </div>
      )}
      <img src={chatIcon} alt="Chatbot Icon" className="chatbot-icon" onClick={handleShowChat} />
    </div>
  );
}
export default ChatIcon;
