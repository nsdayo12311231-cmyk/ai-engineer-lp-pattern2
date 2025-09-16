import Container from '../ui/Container';

export default function Solution() {
  return (
    <section
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '24px 0'
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
        zIndex: 1
      }}></div>

      {/* コンテンツ */}
      <Container>
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}>
              🚀 解決方法は...
            </h2>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: '1.3'
            }}>
              AIエンジニアスキルを身に付けることです！
            </h3>
          </div>

          <div style={{
            textAlign: 'left',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '16px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              これからの時代は"AIを使う人"ではなく、
              <span style={{
                fontWeight: 'bold',
                color: '#ffe98f'
              }}>"AIを作れる人"</span>
              が必要とされます。
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              単純作業や価格競争から抜け出し、
              <span style={{
                fontWeight: 'bold',
                color: '#ffe98f'
              }}>「仕組みを作れる人材」</span>
              になることで、案件単価は劇的に変わります。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}