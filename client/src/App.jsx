import React, { useState } from 'react';
import { ThemeProvider }  from './context/ThemeContext';
import BackgroundEffect   from './components/BackgroundEffect';
import ScrollIndicator    from './components/ScrollIndicator';
import BackToTop          from './components/BackToTop';
import SideMenu           from './components/SideMenu';
import Intro              from './components/Intro';
import Portfolio          from './pages/Portfolio';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <ThemeProvider>
      {/* NO custom cursor — default system cursor */}
      <BackgroundEffect />
      <ScrollIndicator />
      <BackToTop />
      <SideMenu />
      <Portfolio />
      <Intro onComplete={() => setIntroComplete(true)} />
    </ThemeProvider>
  );
};

export default App;
