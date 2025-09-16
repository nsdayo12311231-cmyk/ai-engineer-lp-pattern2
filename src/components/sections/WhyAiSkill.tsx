import Container from '../ui/Container';

export default function WhyAiSkill() {
  const reasons = [
    {
      icon: '💡',
      text: '世界規模でAI人材不足、日本は特に遅れ',
    },
    {
      icon: '⚡',
      text: '生成AIの普及で「誰でもできる作業」は淘汰される',
    },
    {
      icon: '🚀',
      text: '「作れる人」は副業・キャリア双方で需要拡大',
    },
    {
      icon: '👉',
      text: '今学ぶことで先行者メリットを得られる絶好のチャンス！',
      isSpecial: true,
    },
  ];

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
          textAlign: 'left',
          color: 'white',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            🌟 なぜ今AIスキルなのか？
          </h2>

          <div>
            {reasons.map((reason, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: index < reasons.length - 1 ? '16px' : '0',
                gap: '12px'
              }}>
                <span style={{ fontSize: '20px' }}>{reason.icon}</span>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: reason.isSpecial ? '#ff3131' : 'white',
                  fontWeight: reason.isSpecial ? 'bold' : 'normal',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}