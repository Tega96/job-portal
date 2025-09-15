import { memo } from 'react';
import Header from './components/Header';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h2><Header /></h2>
    </div>
  );
};

export default memo(LandingPage);