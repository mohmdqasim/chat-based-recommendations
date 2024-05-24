import React from 'react'
import './Chat.scss'
import { Link } from 'react-router-dom'
function chat() {
    return (
        <React.Fragment>
            <div className="chatBox">
                       <div className="chat">
                       <div className="user1">
                        <p>How does Jasper ai work</p>
                        </div>
                        <div className="user2">
                        <p>Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research, 
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        </p>
                        
                        </div>
                        <div className="user1">
                        <p>How does Jasper ai work</p>
                        </div>
                        <div className="user2">
                        <p>Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research, 
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        </p>
                        
                        </div>
                        <div className="user1">
                        <p>How does Jasper ai work</p>
                        </div>
                        <div className="user2">
                        <p>Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research, 
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        Enthusiastic and aspiring UI/UX designer seeking an internship opportunity to leverage creativity, design skills, and passion for user-centered design. Proficient in user research,
                        </p>
                        
                        </div>
                       </div>
                        <div className="search">
                        <div className="input-group">
                        <input type="text" placeholder='Message AI....' />
                        <button className="start" ><img src="/images/arrow-up.svg" alt="arrow-up" /></button>
                        </div>
                        </div>
            </div>
            <div className="sideBar">
            <div className="input-group">
                <input type="text" placeholder='New Chat' />
                <button className="start"><img src="/images/edit.svg" alt="edit" /></button>
                </div>
                <div className="scrollDiv">
                <div className="box">
                    <h4>Yesterday</h4>
                    <Link to="">
                    Excited Interview Follow-Up
                    </Link>
                    <Link to="">Growth Through Marketing Insight User assistance Requested</Link>
                </div>
                <div className="box">
                    <h4>Previous 7days</h4>
                    <Link to="">
                    Adding Movies  Poster in Figma
                    </Link>
                    <Link to="">Growth Through Marketing Insight User assistance Requested</Link>
                </div>
                <div className="box">
                    <h4>Previous 30days</h4>
                    <Link to="">
                    Financial Aid for Course
                    </Link>
                    <Link to="">
                    Mobile Watches Website Design
                    </Link>
                    <Link to="">Adding Movies  Poster in Figma</Link>
                </div>
                <div className="box">
                    <h4>January</h4>
                    <Link to="">
                    Online Bag Store App 
                    </Link>
                    <Link to="">
                    UI/UX Designer Internship Request
                    </Link>
                </div>
                <div className="box">
                    <h4>January</h4>
                    <Link to="">
                    Online Bag Store App 
                    </Link>
                    <Link to="">
                    UI/UX Designer Internship Request
                    </Link>
                </div>
                <div className="box">
                    <h4>January</h4>
                    <Link to="">
                    Online Bag Store App 
                    </Link>
                    <Link to="">
                    UI/UX Designer Internship Request
                    </Link>
                </div>
                <div className="box">
                    <h4>January</h4>
                    <Link to="">
                    Online Bag Store App 
                    </Link>
                    <Link to="">
                    UI/UX Designer Internship Request
                    </Link>
                </div>
                </div>
                <div className="upgrade">
                    <Link to=""><img src="/images/upgrade.svg" alt="upgrade" /> Upgrade plan</Link>
                    <Link to=""><img src="/images/user.svg" alt="user" /> User Name</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default chat
