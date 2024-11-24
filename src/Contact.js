import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope,FaCode  } from 'react-icons/fa';

export default function Contact(){
    return (
        <div className="contact-us" id ="contact">
            <h2 className="contacth2">Contact Me</h2>
       
        <div className="contact-details">
              <ul>
                    <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sujataiyer124@gmail.com&su=Hello&body=I%20would%20like%20to%20contact%20you!" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />Email</a></li>
                    <li><a href="https://www.linkedin.com/in/sujatha-iyer124" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />LinkedIn</a></li>
                    
                    <li><a href="https://leetcode.com/u/sujatha124/" target="_blank" rel="noopener noreferrer">
                    <FaCode className="icon" />LeetCode</a></li>
                    <li><a href="https://github.com/sujathaiyer124" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />GitHub</a></li>
                    {/* Add other contact methods here */}
                </ul>
        </div>
        </div>
    )
}