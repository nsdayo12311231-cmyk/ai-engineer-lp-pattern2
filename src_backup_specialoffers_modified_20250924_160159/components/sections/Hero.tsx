'use client';
import React, { useState } from 'react';

export default function Hero() {
  const [currentPattern, setCurrentPattern] = useState(1);

  const handleImageClick = () => {
    setCurrentPattern(prev => prev === 3 ? 1 : prev + 1);
  };

  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
      <div className="w-full" style={{ margin: 0, padding: 0 }}>
        {/* モバイル用画像 */}
        <img
          className="block md:hidden w-full cursor-pointer"
          onClick={handleImageClick}
          src={currentPattern === 1 ? '/hero-mobile-1.png' : currentPattern === 2 ? '/hero-mobile-pattern2.png' : '/hero-mobile-pattern3.png'}
          alt="AI Engineer Hero"
          style={{
            width: '100vw',
            height: 'auto',
            maxHeight: '100vh',
            objectFit: 'contain',
            margin: 0,
            padding: 0
          }}
        />

        {/* デスクトップ用画像 */}
        <img
          className="hidden md:block w-full cursor-pointer"
          onClick={handleImageClick}
          src={currentPattern === 1 ? '/hero-desktop-1.png' : currentPattern === 2 ? '/hero-desktop-pattern2.png' : '/hero-desktop-pattern3.png'}
          alt="AI Engineer Hero"
          style={{
            width: '100vw',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain',
            margin: 0,
            padding: 0
          }}
        />

      </div>
    </section>
  );
}