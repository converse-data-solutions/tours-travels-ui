'use client';
import React, { useState, useEffect } from 'react';
import StraightIcon from '@mui/icons-material/Straight';
import { IconButton } from '@mui/material';

const ArrowPart: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showArrow && (
        <div className='fixed bottom-4 right-4 z-40 transition-opacity opacity-100'>
          <IconButton
            style={{
              backgroundColor: '#029e9d',
              color: 'white',
              padding: '10px',
              borderRadius: '50%',
              fontSize: '3xl',
            }}
            onClick={scrollToTop}
          >
            <StraightIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ArrowPart;
