import { memo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Header />
      <Hero />
    </div>
  );
};

export default memo(LandingPage);