import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDev, FaCodepen, FaEnvelope, FaTwitter } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h2 className='contact_text'>Thank you for visiting my portfolio.  I'm always open to new opportunities and collaborations.!</h2>
          <p className='contact_text'>I'd love to hear from you! Whether you're interested in discussing a project, exploring new opportunities, or just want to connect, I'm here to chat. Feel free to reach out using the contact information below. Looking forward to starting a conversation!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
        <a href="https://github.com/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-prajapati-297513188/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://dev.to/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaDev />
        </a>
        <a href="https://codesandbox.io/u/gaurbprajapati" target="_blank" rel="noopener noreferrer">
          <FaCodepen />
        </a>
        <a href="mailto:gauravprajapati094@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>How can I help You ! </h3>
          <div className="row">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact