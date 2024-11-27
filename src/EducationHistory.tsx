import React from 'react';
import grad1 from './Asset/Images/IMG_4818.JPG';
import grad2 from './Asset/Images/IMG_4305.JPG';
import grad3 from './Asset/Images/IMG_4267.png';
import './EducationHistory.css';

const EducationHistory: React.FC = () => {
  return (
      <section className="education-container">
        <h2 className="education-heading">Education History</h2>
        <div className="education-timeline">
          <div className="education-item">
            <h3 className="education-subheading">Master of Applied Computing</h3>
            <p className="education-details">University of Windsor, 2023-2024</p>
            <p className="education-description">
              Specialized in software development, including hands-on projects in web development and low-level C programming projects.
            </p>
          </div>
          <div className="education-item">
            <h3 className="education-subheading">Bachelor of Technology in Computer Science</h3>
            <p className="education-details">Graphic Era Hill University, 2016-2020</p>
            <p className="education-description">
             Focused on core computer science principles, including algorithms, data structures, software engineering, and system design.
            </p>
          </div>
        </div>

        <div className="graduation-images">
          <h3>Graduation Highlights</h3>
          <div className="image-gallery">
            <img src={grad1} alt="Graduation 1" className="graduation-image"/>
            <img src={grad2} alt="Graduation 2" className="graduation-image"/>
            <img src={grad3} alt="Graduation 3" className="graduation-image"/>
          </div>
        </div>
      </section>
  );
};

export default EducationHistory;
