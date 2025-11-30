import React, { useState } from 'react';
import PrioritizationTool from './components/PrioritizationTool';
import LandingPage from './components/LandingPage';

export default function App() {
  const [showApp, setShowApp] = useState(false);

  return showApp ? (
    <PrioritizationTool />
  ) : (
    <LandingPage onStart={() => setShowApp(true)} />
  );
}
