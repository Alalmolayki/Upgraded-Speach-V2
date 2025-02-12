import React from 'react';
import Hero from '../components/Hero';

interface HomeProps {
  onPageChange?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div>
      <Hero onPageChange={onPageChange} />
    </div>
  );
};

export default Home;