import React from 'react';

interface ToggleButtonsProps {
  visibleLines: { STK01: boolean; STK02: boolean; STK03: boolean; STK04: boolean };
  setVisibleLines: React.Dispatch<React.SetStateAction<{ STK01: boolean; STK02: boolean; STK03: boolean; STK04: boolean }>>;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ visibleLines, setVisibleLines }) => {
  const handleToggle = (key: string) => {
    setVisibleLines((prevState) => ({
      ...prevState,
      [key]: !prevState[key as keyof typeof prevState],
    }));
  };

  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          checked={visibleLines.STK01}
          onChange={() => handleToggle('STK01')}
          style={{ borderColor: '#7b68ee' }} // Line color
        />
        STK01
      </label>
      <label>
        <input
          type="checkbox"
          checked={visibleLines.STK02}
          onChange={() => handleToggle('STK02')}
          style={{ borderColor: '#78A3D4' }} // Line color
        />
        STK02
      </label>
      <label>
        <input
          type="checkbox"
          checked={visibleLines.STK03}
          onChange={() => handleToggle('STK03')}
          style={{ borderColor: '#82ca9d' }} // Line color
        />
        STK03
      </label>
      <label>
        <input
          type="checkbox"
          checked={visibleLines.STK04}
          onChange={() => handleToggle('STK04')}
          style={{ borderColor: '#ffc658' }} // Line color
        />
        STK04
      </label>
    </div>
  );
};

export default ToggleButtons;




