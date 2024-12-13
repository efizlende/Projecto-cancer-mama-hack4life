import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const LandingLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
