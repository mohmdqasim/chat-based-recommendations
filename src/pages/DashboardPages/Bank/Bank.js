// import React from 'react'
// import './Bank.scss'
// import { Link } from 'react-router-dom'
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// function Bank() {
//     return (
//         <React.Fragment>
//             {/* <div className="messageBox">
//                 <div className="row">
//                     <div className="col-lg-8 mx-auto">
//                        <div className="text-center">
//                        <span className='logo'>AI</span>
//                         <h4>How can I help you today?</h4>
//                        </div>
//                         <div className="cards">
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Help me pick</h4>
//                                     <p>A birthday gift for my mom who likes gradening</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Tell me a fun fact</h4>
//                                     <p>About the Golden State Warriors</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Tell me a fun fact</h4>
//                                     <p>About the Golden State Warriors</p>
//                                 </Link>
//                             </div>
//                             <div className="mini-card">
//                                 <Link to="/chat">
//                                     <h4>Write a python script</h4>
//                                     <p>to automate sending daily email reports</p>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="input-group">
//                         <input type="text" placeholder='Message AI....' />
//                         <button className="start" ><img src="/images/arrow-up.svg" alt="arrow-up" /></button>
//                         </div>
//                         <p className='info'>AI can make mistakes. Consider checking important information</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="sideBar">
//             <div className="input-group">
//                 <input type="text" placeholder='New Chat' />
//                 <button className="start"><img src="/images/edit.svg" alt="edit" /></button>
//                 </div>
//                 <div className="scrollDiv">
//                 <div className="box">
//                     <h4>Yesterday</h4>
//                     <Link to="/chat">
//                     Excited Interview Follow-Up
//                     </Link>
//                     <Link to="/chat">Growth Through Marketing Insight User assistance Requested</Link>
//                 </div>
//                 <div className="box">
//                     <h4>Previous 7days</h4>
//                     <Link to="/chat">
//                     Adding Movies  Poster in Figma
//                     </Link>
//                     <Link to="/chat">Growth Through Marketing Insight User assistance Requested</Link>
//                 </div>
//                 <div className="box">
//                     <h4>Previous 30days</h4>
//                     <Link to="/chat">
//                     Financial Aid for Course
//                     </Link>
//                     <Link to="/chat">
//                     Mobile Watches Website Design
//                     </Link>
//                     <Link to="/chat">Adding Movies  Poster in Figma</Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 <div className="box">
//                     <h4>January</h4>
//                     <Link to="/chat">
//                     Online Bag Store App 
//                     </Link>
//                     <Link to="/chat">
//                     UI/UX Designer Internship Request
//                     </Link>
//                 </div>
//                 </div>
//                 <div className="upgrade">
//                     <Link to="/chat"><img src="/images/upgrade.svg" alt="upgrade" /> Upgrade plan</Link>
//                     <Link to="/chat"><img src="/images/user.svg" alt="user" /> User Name</Link>
//                 </div>
//             </div> */}

//             <CardContent className="card-content">
//   <Typography variant="h5" component="div" className="title">
//     Hardcoded Title
//   </Typography>
//   <Typography variant="body2" className="description">
//     This is a hardcoded description.
//   </Typography>
// </CardContent>



//         </React.Fragment>
//     )
// }

// export default Bank




















import React, { useState } from 'react';
import { CardContent, Typography, Dialog, DialogContent } from '@mui/material';
import './Bank.scss';

const cards = [
  { id: 1, title: 'Card 1', description: 'This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.This is Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is Card 5.' },
  { id: 6, title: 'Card 6', description: 'This is Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is Card 8.' },
  { id: 9, title: 'Card 9', description: 'This is Card 9.' },
  { id: 10, title: 'Card 10', description: 'This is Card 10.' },
  { id: 11, title: 'Card 11', description: 'This is Card 11' },
  { id: 12, title: 'Card 12', description: 'This is Card 12' },

];

const CardListComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleClickOpen = (description) => {
    setSelectedDescription(description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card" onClick={() => handleClickOpen(card.description)}>
          <CardContent className="card-content">
            <Typography variant="h5" component="div" className="title">
              {card.title}
            </Typography>
            <Typography variant="body2" className="description">
              {card.description}
            </Typography>
          </CardContent>
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="body2">
            {selectedDescription}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardListComponent;
