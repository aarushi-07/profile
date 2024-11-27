import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <div>
      {/* Work Experience Section */}
      <section className="work-experience-container">
        <h2 className="work-experience-heading">Work Experience</h2>

        <div className="work-experience-item">
          <h3 className="work-experience-role">Research IT Web Application Integrator</h3>
          <p className="work-experience-company">Rotman Research Institute at Baycrest, Summer 2024</p>
          <p className="work-experience-location">Toronto, ON</p>
          <p className="work-experience-description">
            Successfully migrated an open-source platform into production on RHEL that was used by researchers. Contributed to
            both back-end and front-end code, with an emphasis on improving user experience.
            Responsibilities included:
            <ul>
              <li>Configured REST APIs for system integration, enhancing data processing capabilities</li>
              <li>Executed thorough study of documentation and interpreted existing code to optimize system performance</li>
              <li>Conducted market research and competitive analysis to identify trends and improve the functionality of the web application</li>
              <li>Authored comprehensive technical documentation to support system maintenance and future upgrades</li>
            </ul>
          </p>
        </div>

        <div className="work-experience-item">
          <h3 className="work-experience-role">Software Developer</h3>
          <p className="work-experience-company">Cognizant Technology Solutions, 2020 - 2022</p>
          <p className="work-experience-location">Delhi, India</p>
          <p className="work-experience-description">
            Worked on a variety of projects in Java, ReactJS, PTC FlexPLM and TRC, including leading a
            team of developers for a large-scale e-commerce platform.
            Responsibilities included:
            <ul>
              <li>Developed, debugged, and implemented REST APIs for data processing using Google Cloud Platform's (GCP) Pub/Sub as a data source integrated user access control using OAuth2 on PTC FlexPLM and TRC</li>
              <li>Identified and resolved critical issues within an average of two days by analyzing logs, utilizing SonarQube, and conducting thorough debugging sessions</li>
              <li>Led offshore team as production lead ensuring efficient collaboration while coordinating with other project team members to understand development requirements</li>
              <li>Presented the strategic plan for the development of a new integration to the project team and stakeholders, successfully gathering buy-in</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="technical-skills-container">
        <h2 className="technical-skills-heading">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <p>Objective C, C++, Java, JavaScript, HTML, CSS3, Python</p>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <p>Oracle, MySQL, SQL, MongoDB, Postgres</p>
          </div>
          <div className="skill-category">
            <h3>Front-End Frameworks/Libraries</h3>
            <p>ReactJS</p>
          </div>
          <div className="skill-category">
            <h3>Software</h3>
            <p>PTC FlexPLM, TRC, SonarQube, Eclipse, PyCharm, Visual Studio</p>
          </div>
          <div className="skill-category">
            <h3>Platforms</h3>
            <p>Windows, Linux</p>
          </div>
          <div className="skill-category">
            <h3>Cloud Services</h3>
            <p>Google Cloud Platform Pub/Sub</p>
          </div>
          <div className="skill-category">
            <h3>Version Control & Management</h3>
            <p>Git, Agile, JIRA, GitHub, SDLC, Confluence</p>
          </div>
          <div className="skill-category">
            <h3>Others</h3>
            <p>REST APIs, Django, JSON, XML, Microsoft Office, Postman</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
