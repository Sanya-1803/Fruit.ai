import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    // State to store chat messages
    const [messages, setMessages] = useState([
        { text: 'This is a sample big message with a longer text paragraph', type: 'received', timestamp: '10:30 AM' },
        { text: 'This is a sample big message with a longer text paragraph', type: 'sent', timestamp: '10:32 AM' },
        { text: 'Audio Message', type: 'received', timestamp: '10:35 AM', isAudio: true },
        { text: 'Audio Message', type: 'sent', timestamp: '10:37 AM', isAudio: true },
        { text: 'This is a sample message for a chat', type: 'received', timestamp: '10:40 AM' },
        { text: 'This is a sample message for a chat', type: 'sent', timestamp: '10:42 AM' },
    ]);

    // State to store current input value
    const [newMessage, setNewMessage] = useState('');

    // Handle new message input
    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    // Function to simulate bot reply
    const sendBotReply = () => {
        const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const botReply = {
            text: 'This is an automatic reply from the bot!',
            type: 'received',
            timestamp: timeNow,
        };

        // Add the bot's reply to the chat after 1 second
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, botReply]);
        }, 1000);
    };

    // Handle send message
    const handleSendMessage = () => {
        if (newMessage.trim() === '') return; // Don't send empty messages
        const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const newMsg = {
            text: newMessage,
            type: 'sent',
            timestamp: timeNow,
        };

        // Update the messages state with the new message
        setMessages([...messages, newMsg]);

        // Clear the input field after sending
        setNewMessage('');

        // Simulate a bot reply
        sendBotReply();
    };

    // Handle 'Enter' key press for sending message
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            {/* Chat Header */}
            <div className="chat-header">
                <img src="user-avatar.jpg" alt="User Avatar" className="user-avatar" />
                <div className="user-info">
                    <h3>Sanya</h3>
                    <p>Online</p>
                </div>
            </div>

            {/* Chat Date */}
            <div className="chat-date">
                <p>24 October, Sunday</p>
            </div>

            {/* Chat Body */}
            <div className="chat-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.isAudio ? (
                            <div className="audio-message">
                                <span>{msg.text}</span>
                                {/* Replace with an actual audio player if required */}
                            </div>
                        ) : (
                            <p>{msg.text}</p>
                        )}
                        <span>{msg.timestamp}</span>
                    </div>
                ))}
            </div>

            {/* Chat Footer */}
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Message..."
                    value={newMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button className="send-button" onClick={handleSendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;