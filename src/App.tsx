import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';
import ApplicationForm from './pages/ApplicationForm';
import ApplicationSuccess from './pages/ApplicationSuccess';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="/apply/:jobId" element={<ApplicationForm />} />
      <Route path="/success" element={<ApplicationSuccess />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
