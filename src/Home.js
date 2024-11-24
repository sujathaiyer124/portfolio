import React, { useEffect, useState } from "react"
import Typed from "typed.js"
export default function Home() {
    const [typedString,setTypedStrings]=useState([
        'Web Developer.',
        'Front End Developer.',
        'Backend Developer.'
       
    ]); 
    useEffect(() => {
        const options ={
            strings:typedString,
            typeSpeed: 50,
        };
        const typed = new Typed('#element',options);
        return () => {
            typed.destroy();
        };
    },[typedString]);


    return (
        <div>
            <main>
                <section className="home" id="home">
                    <div className="leftSection">
                        Hi, My name is <span className="purple">Sujatha</span>
                        <div> and I am a passionate </div>
                       
                        <span id="element"></span>
                    
                    </div>
                    <div className="rightSection">
                        <img src="/dev.png" alt="developer" />
                    </div>
                </section>

            </main>
            <div id="element"></div>
            
        </div>
    )
}