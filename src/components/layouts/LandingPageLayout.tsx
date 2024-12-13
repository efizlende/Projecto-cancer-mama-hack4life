import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface LandingLayoutProps {
  children: React.ReactNode; // Tipo correto para children
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
