import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  STK01: number;
  STK02: number;
  STK03: number;
  STK04: number;
}

const data: DataPoint[] = [
  { name: 'Time', STK01: 400, STK02: 300, STK03: 200, STK04: 100 },
  { name: 'xxx', STK01: 300, STK02: 400, STK03: 100, STK04: 200 },
  { name: 'xxx', STK01: 200, STK02: 500, STK03: 300, STK04: 400 },
  { name: 'xxx', STK01: 278, STK02: 390, STK03: 450, STK04: 200 },
];

interface ChartProps {
  visibleLines: { STK01: boolean; STK02: boolean; STK03: boolean; STK04: boolean };
}

const Chart: React.FC<ChartProps> = ({ visibleLines }) => {
  const chartKey = JSON.stringify(visibleLines);

  return (
    <div className="chart-container">
      <ResponsiveContainer>
        <AreaChart
          key={chartKey} // Ensure that the chart is re-rendered when visibility changes
          data={data}
        >
          <defs>
            <linearGradient id="colorSTK01" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7b68ee" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#7b68ee" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSTK02" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#78A3D4" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#78A3D4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSTK03" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSTK04" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffc658" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          
          {/* Force Y-axis to always display */}
          <YAxis domain={[0, 'auto']} tickCount={5} />

          <Tooltip />

          {/* Render Areas for each tickbox */}
          {visibleLines.STK01 && (
            <Area
              key={`area-STK01-${chartKey}`} // Unique key
              type="linear" // Straight lines
              dataKey="STK01"
              stroke="#7b68ee"
              fill="url(#colorSTK01)"
              fillOpacity={1}
              strokeDasharray="5 5" // Dashed line
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          )}
          {visibleLines.STK02 && (
            <Area
              key={`area-STK02-${chartKey}`} // Unique key
              type="linear" // Straight lines
              dataKey="STK02"
              stroke="#78A3D4"
              fill="url(#colorSTK02)"
              fillOpacity={1}
              strokeDasharray="5 5" // Dashed line
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          )}
          {visibleLines.STK03 && (
            <Area
              key={`area-STK03-${chartKey}`} // Unique key
              type="linear" // Straight lines
              dataKey="STK03"
              stroke="#82ca9d"
              fill="url(#colorSTK03)"
              fillOpacity={1}
              strokeDasharray="5 5" // Dashed line
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-out"
              
            />
          )}
          {visibleLines.STK04 && (
            <Area
              key={`area-STK04-${chartKey}`} // Unique key
              type="linear" // Straight lines
              dataKey="STK04"
              stroke="#ffc658"
              fill="url(#colorSTK04)"
              fillOpacity={1}
              strokeDasharray="5 5" // Dashed line
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;












