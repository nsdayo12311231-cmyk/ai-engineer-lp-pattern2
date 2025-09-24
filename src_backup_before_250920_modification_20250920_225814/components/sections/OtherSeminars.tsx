import React from 'react';

export default function OtherSeminars() {
  const problems = [
    {
      image: '/nagameru.png',
      alt: '動画を見るだけのイラスト',
      text: '動画や教材を\n眺めるだけで終了'
    },
    {
      image: '/chisiki.png',
      alt: '知識習得のイラスト',
      text: '資格取得や\nノウハウコレクターで終わる'
    },
    {
      image: '/jitumu.png',
      alt: '実務に活かせないイラスト',
      text: '知識は増えるが\n実務に活かせない'
    }
  ];

  return (
    <section style={{ backgroundColor: 'white', padding: '60px 0' }}>
      <div
        style={{
          width: '90%',
          maxWidth: 'none',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* タイトル */}
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '40px'
          }}
        >
          他セミナー・講座でよくあること
        </h2>

        {/* 3つの白いカード */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #e5e7eb',
                flex: '1',
                minWidth: '300px',
                maxWidth: '350px',
                textAlign: 'center'
              }}
            >
              {/* イラスト画像 */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={problem.image}
                  alt={problem.alt}
                  style={{
                    maxWidth: '200px',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </div>

              {/* テキスト */}
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#333',
                    lineHeight: '1.6',
                    margin: 0,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}