import React from "react";
import './HeaderFooter.css';
import {Link} from "react-router-dom";

export function Header() {
    const handleEmailClick = () => {
    window.location.href = 'mailto:aarushi.t01@.com?subject=Contact%20Aarushi&body=Hello%20Aarushi!';
  };

return (
    <nav className="head quando">
        <Link to="/" className="name" style={{float: "left"}}>
            Aarushi Bagri
        </Link>
        <a
            href="https://in.linkedin.com/in/aarushi-bagri-599165186"
            className="fa fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
        ></a>
        <a href="https://github.com/Aarushi-07 "
           className="fa fa-github"
           target="_blank"
           rel="noopener noreferrer"></a>
        <button
            onClick={handleEmailClick}
            className="contact-btn"
            title="Contact Me via Email"
        >
            <i className="fa fa-envelope"></i>
        </button>
        <a
            href="../public/Asset/PDF/AarushiBagri_resume.pdf"
            download
            className="resume-btn"
            title="Download Resume"
        >
            <i className="fa fa-download"></i>
        </a>
    </nav>

)
}

export function Footer() {
    return (
        <>
            <footer className="border-top mt-5 py-4 text-center text-muted small">
                <div className="cright">
                    <p>&copy; 2024 All rights are reserved by Aarushi Bagri</p>
                </div>

                <div className="foot-logo">
                <a href="https://facebook.com/aarushi-bagri" className="fa fa-facebook bl" target="_blank"
        rel="noopener noreferrer"></a>
                    <a href="https://instagram.com/aarushithappens" className="fa fa-instagram bl" target="_blank"
        rel="noopener noreferrer"></a>
                    <a href="https://www.linkedin.com/in/aarushi-bagri" className="fa fa-linkedin bl" target="_blank"
        rel="noopener noreferrer"></a>
                    <a href="https://github.com/Aarushi-07 " className="fa fa-github bl" target="_blank"
        rel="noopener noreferrer"></a>
                </div>
            </footer>
        </>
    )
}