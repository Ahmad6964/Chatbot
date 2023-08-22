import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { RxDotFilled } from 'react-icons/rx';
import '../../components/chatCard/ChatCard.css';
import stampaLogo from '../../images/StampaLogo.png';
import ChatWindow from '../chatWindow/ChatWindow';

const ChatCard = ({ handleShowChat }) => {
  return (

    <div className="main">
      <div className='chat-card'>
        <div className="icon-container">
          <div className="hide-button" onClick={handleShowChat}><FiChevronDown /></div>
        </div>
        <div className="card-header">
          <div className="stampa-logo">
            <img className='logo' src={stampaLogo} alt="" />
          </div>
          <div className='header-logo-text'>
            <RxDotFilled className='active-chat-dot' />
          </div>
          <div>
            <span className='agent-name'>Chat With Ahmad</span>
          </div>
        </div>
        <div>
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
export default ChatCard;

