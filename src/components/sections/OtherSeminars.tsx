import Container from '../ui/Container';

export default function OtherSeminars() {
  const commonProblems = [
    '動画を見て終わり',
    '資格取得やノウハウコレクターで終わる',
    '「副業で稼げる」と言うだけで実務に直結しない',
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="space-y-xl">
          <div className="text-center">
            <div className="bg-gray-100 py-3 px-6 rounded-lg inline-block">
              <h2 className="text-h2 text-gray-900">
                ⚠️ 他セミナー・講座でよくあること
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {commonProblems.map((problem, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: 'url(/hero-background.jpg)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  position: 'relative',
                  borderRadius: '12px',
                  padding: '20px',
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
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
                    margin: 0,
                    fontWeight: 'normal',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                  }}>
                    {problem}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="space-y-2">
              <p className="font-bold text-blue-600">
                👉 多くのセミナーは"知識止まり"
              </p>
              <p className="font-bold text-blue-600">
                👉 このセミナーでは、実務と案件に直結する具体的ステップを公開します！
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}