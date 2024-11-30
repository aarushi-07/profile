import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./Profile";
import EducationHistory from "./EducationHistory";
import {Footer, Header} from "./HeaderFooter";
import WorkExperience from "./WorkExperience";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*   basename="/profile" not working with Hashrouter, so updating Profile.tsx with actual path*/}
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Profile />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education-history" element={<EducationHistory />} />
        {/*<Route path="*" element={<Profile />} />*/}
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
