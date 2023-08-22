import React from 'react'
import '../chatWindow/ChatWindow.css';
import BotImage from '../../../src/images/Botimage.png'
import adminAvatar from '../../images/adminavatar4.png'
import { MdOutlineAttachFile } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

const ChatWindow = () => {
    return (
        <div className="chat-box">
            <div className="chat-messages">
            <div className="agent-message">
                <div className="botImage-messaga">
                    <div>
                        <img className="bot-image" src={BotImage} alt="" />
                    </div>
                    <div className="message-box">
                        <div className="text-message">
                            <p className='bot-text'>Greate! Can you please provide your <br />
                                email? I'll use in case we get <br />disconnected</p>
                            <h6 className='message-time'>
                                12.26PM
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-with-lines">
                <span className="line line-left"></span>
                <span className="centered-text">Agent has joined the chat</span>
                <span className="line line-right"></span>
            </div>
            {/* Agent has Joined */}
             
            <div className="agent-message">
                <div className="botImage-messaga">
                    <div>
                        <img className="bot-image" src={adminAvatar} alt="" />
                    </div>
                    <div className="text-profile">
                    <div className="user-heading">
                    <h6 className="name">John Doe</h6>
                    </div>
                    <div className="message-box">
                        <div className="text-message">
                            <p className='bot-text'>Hii User?</p>
                            <h6 className='message-time'>
                                12.20PM
                            </h6>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            

            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
          
            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
          
            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
            {/* Your Text */}
            <div className="userMessage-box">
                <div className="user-profile">
                    <h6 className='you'>You</h6>
                <div className="userText-message">
                    <p className='user-text'>The only way to do great work</p>
                    <h6 className='userMessage-time'>
                        12.20PM
                    </h6>
                </div>
                </div>
            </div>
          
              
             {/* Input Field */}
              <div className="input-box">
                 <div className="input">
                    <div>
                    <input className='input-field' type="text" placeholder='Send message...' />
                    </div>
                    <div className='input-icons'>
                    <div className="select-file">
                      <MdOutlineAttachFile/>
                    </div>
                    <div className="sendButton-container">
                  <IoMdSend className='send-button'/>
                    </div>
                    </div>
                   
                 </div>
              </div>
              </div>
        </div>
    )
}

export default ChatWindow