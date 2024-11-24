import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import About1 from "./About1.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
export default function App() {
    return (
        <div className="first-div">
            <Navbar />
            <main>
                <Home />
                <hr />

                <About1 />
                <hr />

                <Projects />
                <hr />

                <Contact />
                <hr />
            </main>

        </div>


    )
}
