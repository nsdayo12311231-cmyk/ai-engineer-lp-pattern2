'use client';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentPattern, setCurrentPattern] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pattern = urlParams.get('pattern');
    console.log('URL Pattern:', pattern);
    console.log('Current URL:', window.location.href);
    if (pattern) {
      const validPattern = parseInt(pattern, 10);
      console.log('Valid Pattern:', validPattern);
      if (validPattern >= 1 && validPattern <= 3) {
        setCurrentPattern(validPattern);
        console.log('Set Pattern to:', validPattern);
      }
    }
  }, []);

  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
      {/* 一時的なデバッグ表示 */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'blue', color: 'white', padding: '5px', zIndex: 1000 }}>
        Current: {currentPattern}
      </div>
      <div className="w-full" style={{ margin: 0, padding: 0 }}>
        {/* モバイル用画像 */}
        <img
          className="block md:hidden w-full cursor-pointer"
          src={currentPattern === 1 ? '/hero-mobile-1.png' : currentPattern === 2 ? '/hero-mobile-2.png' : '/hero-mobile-3.png'}
          alt="AI Engineer Hero"
          onClick={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('track', 'Lead');
            }
            window.open('https://line.me/R/ti/p/@your_line_id', '_blank');
          }}
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
          src={currentPattern === 1 ? '/hero-desktop-1.png' : currentPattern === 2 ? '/hero-desktop-2.png' : '/hero-desktop-3.png'}
          alt="AI Engineer Hero"
          onClick={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('track', 'Lead');
            }
            window.open('https://line.me/R/ti/p/@your_line_id', '_blank');
          }}
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