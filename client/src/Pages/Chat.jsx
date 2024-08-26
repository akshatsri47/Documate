// src/components/Chat.jsx

import React, { useState, useEffect } from 'react';
import { useSocket } from '../socket/Socket';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socket = useSocket();

    useEffect(() => {
        if (socket == null) return;

        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => socket.off('message');
    }, [socket]);

    const sendMessage = () => {
        if (message.trim() && socket) {
            socket.emit('message', message);
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Socket.IO Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
