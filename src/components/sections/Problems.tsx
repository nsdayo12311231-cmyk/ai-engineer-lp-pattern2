import Container from '../ui/Container';

export default function Problems() {
  const problems = [
    '動画を見て終わり',
    '資格取得やノウハウコレクターで終わる',
    '「副業で稼げる」と言うだけで実務に直結しない',
  ];

  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '32px 16px',
      }}
    >
      <Container>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div
            style={{
              backgroundImage: 'url(/hero-background.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'relative',
              borderRadius: '12px',
              padding: '16px',
              overflow: 'hidden'
            }}
          >
            {/* 70% ダークオーバーレイ */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '12px',
              zIndex: 1
            }}></div>

            {/* コンテンツ */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '4px 20px'
            }}>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                margin: '0 0 24px 0'
              }}>
                💭 こんな悩みを感じていませんか？
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
                maxWidth: '400px'
              }}>
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{
                      fontSize: '22px',
                      color: '#ff3131',
                      lineHeight: '1',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>❌</span>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: 'white',
                      margin: 0,
                      fontWeight: 'normal',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}