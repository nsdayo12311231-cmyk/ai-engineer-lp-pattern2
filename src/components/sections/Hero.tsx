'use client';
import React, { useState } from 'react';

export default function Hero() {
  const [currentPattern, setCurrentPattern] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const pattern = urlParams.get('pattern');
      if (pattern) {
        const validPattern = parseInt(pattern, 10);
        if (validPattern >= 1 && validPattern <= 3) {
          return validPattern;
        }
      }
    }
    return 1;
  });

  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
      {/* デバッグ用 */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '5px', zIndex: 1000 }}>
        Pattern: {currentPattern}
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