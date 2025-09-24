import React from 'react';
import Container from '../ui/Container';

export default function Problems() {
  const problems = [
    '案件を取っても単価が安すぎる',
    '本業＋副業で時間ばかり奪われる',
    '頑張っているのに収入もキャリアも積み上がらない'
  ];

  const problemsMobile = [
    '案件を取っても\n単価が安すぎる',
    '本業＋副業で\n時間ばかり奪われる',
    '頑張っているのに\n収入もキャリアも\n積み上がらない'
  ];

  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '40px 16px',
      }}
    >
      <Container>
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            width: '95%',
            maxWidth: 'none'
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '16px',
              padding: '60px 40px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            className="md:p-16 p-5"
          >
            {/* タイトル */}
            <h2
              style={{
                fontWeight: 'bold',
                color: '#1f2937',
                textAlign: 'center',
                margin: '0 0 32px 0',
                lineHeight: '1.3',
                fontSize: 'clamp(20px, 5vw, 24px)'
              }}
            >
              <span className="hidden md:inline">こんな悩みを感じていませんか？</span>
              <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
                こんな悩みを{'\n'}感じていませんか？
              </span>
            </h2>

            {/* イラスト */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '32px'
              }}
            >
              <img
                src="/nayami.png"
                alt="悩んでいる女性のイラスト"
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>

            {/* 問題リスト */}
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}
              className="px-0 md:!px-24"
            >
              {/* 統一リスト - 各項目内でPC/Mobile切り替え */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'inline-block',
                textAlign: 'left'
              }}>
                {problems.map((problem, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: index < problems.length - 1 ? '15px' : '0',
                      color: '#374151'
                    }}
                  >
                    <span
                      style={{
                        color: '#ef4444',
                        fontSize: '20px',
                        marginRight: '12px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      ❌
                    </span>
                    <span>
                      <span className="hidden md:inline" style={{
                        fontWeight: 'bold',
                        fontSize: '22px',
                        lineHeight: '1.6',
                        letterSpacing: '-0.5px',
                        whiteSpace: 'nowrap'
                      }}>{problem}</span>
                      <span className="md:hidden" style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        lineHeight: '1.5',
                        whiteSpace: 'pre-line'
                      }}>{problemsMobile[index]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}