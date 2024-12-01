import profilePhoto from './Asset/Images/IMG_4752.JPG';
import work from './Asset/Images/work.png';
import education from './Asset/Images/education.jpg';
import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import './FlipCard.css';


function Introduction() {
    return (
        <div className="container-fluid">
            <div className="row photo-bg">
                <div className="col-sm-4 ">
                    <div className="photo">
                        <img src={profilePhoto} alt="Aaru"
                             style={{marginTop: "20px", marginBottom: "20px", display: "block"}}/>
                    </div>
                </div>
                <div
                    className="col-sm-8"
                    style={{
                        marginTop: "10%",
                        marginBottom: "20px",
                        display: "block",
                        maxWidth: "70%",
                        fontFamily: "'Courier New', Courier, monospace",
                    }}
                >
                    <span style={{fontSize: "small", display: "block"}}>Hi my name is</span>
                    <h1
                        className="typing-animation"
                        style={{
                            margin: "10px 0",
                            display: "inline-block",
                        }}
                    >
                        Aarushi Bagri
                    </h1>
                    <br/>
                    <span style={{display: "block"}}>
                    Around 3 years of professional experience working with several programming tools to
deliver quality results to clients. I am currently open to new challenges!
                    </span>
                </div>
            </div>
        </div>
    )
}

interface CardProps {
  imageSrc: string;
  altText: string;
  link: string;
  linkText: string;
}

function Card({ imageSrc, altText, link, linkText }: CardProps) {
  return (
    <div className="col-sm-6">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageSrc} alt={altText} style={{ width: '300px', height: '300px' }} />
          </div>
          <div className="flip-card-back">
            <div className="flip-text nosifer">
              <Link to={link}>{linkText}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card
          imageSrc={work}
          altText="Work Experience"
          link="/work-experience"
          linkText="Work Experience"
        />
        <Card
          imageSrc={education}
          altText="Education"
          link="/education-history"
          linkText="Education"
        />
      </div>
    </div>
  );
}

function Profile() {
    return (
        <>
            <Introduction />
            <Cards />
        </>
    )
}

export default Profile;