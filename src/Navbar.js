import React from "react"
export default function Navbar(){
    return (
       <nav id="home" >
        <div className="left">Sujatha's Portfolio</div>
        <div className="right">
            <ul>
           <li><a href="#home">Home</a></li>
           <li> <a href="#about">About</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#contact">Contact Me</a></li>
        </ul>
        </div>
        </nav>
        
    )
}
