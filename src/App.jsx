// src/App.js

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './component/navbar/navbar';
import EventRegistrationForm from './component/eventRegistrationForm';
import JobApplicationForm from './component/jobApplicationForm';
import "./App.css";
import SurveyForm from './component/surveyForm';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-1 p-8">
          <Routes>
          <Route path="/" element={<Navigate to="/registration" replace />} />
          <Route path="/registration"  element={<EventRegistrationForm/>} />
          <Route path="/job-application" element={<JobApplicationForm/>} />
          <Route path="/survey-form" element={<SurveyForm/>} />
          </Routes>
            
        </div>
      </div>
    </Router>
  );
}

export default App;
