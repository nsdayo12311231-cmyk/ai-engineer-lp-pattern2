import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="pt-20 pb-2xl bg-white">
      <div className="relative w-full">
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundImage: 'url(/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px 2%'
          }}
        >
          {/* ダークオーバーレイ */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}></div>

          {/* 上部余白 */}
          <div style={{ flex: 1 }}></div>

          {/* テキストコンテンツ */}
          <div style={{
            textAlign: 'center',
            color: 'white',
            textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
            position: 'relative',
            zIndex: 2
          }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '900',
              marginBottom: '20px',
              lineHeight: '1.2',
              letterSpacing: '0.5px',
              textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
            }}>
              <span style={{
                display: 'block',
                fontSize: '32px',
                color: '#ffe98f !important',
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 30px rgba(255,233,143,0.3)',
                marginBottom: '8px',
                fontWeight: '900'
              }}>
                「このまま一生、
              </span>
              <span style={{
                fontSize: '32px',
                color: '#ff3131 !important',
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 30px rgba(255,49,49,0.3)',
                fontWeight: '900'
              }}>
                低単価のまま？」
              </span>
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.4',
              marginBottom: '24px',
              fontWeight: '600',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
              letterSpacing: '0.3px'
            }}>
              <span style={{
                color: '#ffe98f !important',
                fontSize: '20px',
                fontWeight: '700'
              }}>
                3ヶ月で単価5倍
              </span>
              を狙える<br />
              <span style={{
                color: '#ffe98f !important',
                fontSize: '19px',
                fontWeight: '700'
              }}>
                "AIエンジニアスキル"
              </span>
              を、<br />
              <span style={{
                color: '#ff3131 !important',
                fontSize: '19px',
                fontWeight: '700'
              }}>
                無料セミナー
              </span>
              で限定公開
            </p>
          </div>

          {/* CTAボタン */}
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            <Container>
              <Button
                variant="primary"
                size="large"
                className="w-full"
              >
                📱 無料セミナーに参加する
              </Button>
            </Container>
          </div>

          {/* 下部余白 */}
          <div style={{ flex: 1 }}></div>
        </div>
      </div>
    </section>
  );
}