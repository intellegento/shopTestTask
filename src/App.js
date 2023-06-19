import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Header/Navigation';
import WelcomeSlider from '../components/WelcomeSlider';
import Benefits from '../components/Benefits';
import SliderForItem from '../components/SliderForItem';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <WelcomeSlider />
      <Benefits />
      <SliderForItem />
    </div>
  );
};

export default App;