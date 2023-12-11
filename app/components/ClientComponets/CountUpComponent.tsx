'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface CountUpProps {
  end: number;
  duration: number;
}

const CountUpComponent: React.FC<CountUpProps> = ({ end, duration }) => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    setStartCounting(true);
  }, []);

  return (
    <div>
      {startCounting && <CountUp end={end} duration={duration} />}
    </div>
  );
};

export default CountUpComponent;
