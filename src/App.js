import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Header/Navigation';
import WelcomeSlider from '../components/WelcomeSlider';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <WelcomeSlider />
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;