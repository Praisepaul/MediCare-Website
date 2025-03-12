import { useState } from 'react';
import { Fab, Box, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab 
        color="primary" 
        aria-label="chat" 
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Window */}
      {open && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '350px',
            height: '500px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            zIndex: 999
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '4px' }}>
            <IconButton onClick={toggleChat} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat App (iframe) */}
          <iframe
            src="https://gemini-chat-app-iota.vercel.app/"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Chat App"
          />
        </Box>
      )}
    </>
  );
};

export default FloatingChat;
