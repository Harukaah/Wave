import React, { useState } from 'react';
import './App.css'; // Import the styles
import Chart from './Chart';

import ToggleButtons from './ToggleButtons';

const App: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState({
    STK01: false,
    STK02: false,
    STK03: false,
    STK04: false,
  });

  return (
    <div className="container">
      <div className="chart-checkbox-wrapper">
        <Chart visibleLines={visibleLines} />
        <ToggleButtons visibleLines={visibleLines} setVisibleLines={setVisibleLines} />
      </div>
    </div>
  );
};

export default App;


