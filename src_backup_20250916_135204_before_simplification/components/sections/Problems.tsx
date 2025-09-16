import Container from '@/components/ui/Container';

export default function Problems() {
  const problems = [
    '動画を見て終わり',
    '資格取得やノウハウコレクターで終わる',
    '「副業で稼げる」と言うだけで実務に直結しない',
  ];

  return (
    <section className="section-spacing bg-bg-secondary">
      <Container>
        <div style={{
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333333',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            💭 こんな悩みを感じていませんか？
          </h2>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                backgroundImage: 'url(/hero-background.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
                borderRadius: '8px',
                padding: '20px',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              {/* ダークオーバーレイ（70%） */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '8px',
                zIndex: 1
              }}></div>

              {/* コンテンツ */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%'
              }}>
                <span style={{
                  fontSize: '20px',
                  color: '#ff3131'
                }}>❌</span>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'white',
                  fontWeight: 'normal',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  margin: 0
                }}>
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}