import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Header/Navigation';
import WelcomeSlider from '../components/WelcomeSlider';
import Benefits from '../components/Benefits';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <WelcomeSlider />
      <Benefits />
    </div>
  );
};

export default App;