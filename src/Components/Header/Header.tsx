import React, {useState} from "react"
import "./Header.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactTypingEffect from 'react-typing-effect';




const Header =(props)=>{
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    return(
        <div id="Header" className="headerClass">
            <div>
      <Button onClick={handleOpen}>Instruction/Features</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
                Click on Coin Name to get details and create another Dashboard
                </p> 
            <p>
            Click on Coin Name in the second Dash to remove coin
                 </p>

            <p>
            Sort by columns by clicking on the columns
            </p>
            <p>
              Filter by clicking on the three dots and then Filter  
            </p>

          </Typography>
        </Box>
      </Modal>
    </div>
    <ReactTypingEffect
        text={["Hello.", "Welcome to CryptoDashboard", "Applied-IT-Project", 'developed by Tudor Florea']}
        typingDelay={500}
        eraseSpeed={100}
        speed={200}
        eraseDelay={200}

        displayTextRenderer={(text, i) => {
            return (
              <h1 id="typeWrite">
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}                    
                    
                    >{char}</span>
                  );
                })}
              </h1>
            );
          }} 
      />
            <div id="info" className="headerClass">
                
                <Link href='https://github.com/tjf91'target="_blank" >
                    <GitHubIcon/>
                </Link>
                <Link href='https://www.linkedin.com/in/james-florea-97223617a/'target="_blank" >
                    <LinkedInIcon/>
                </Link>
                <Link href="https://jflorea.com">
                    Portfolio
                </Link>
                         
            </div>
        </div>
    )
}

export default Header