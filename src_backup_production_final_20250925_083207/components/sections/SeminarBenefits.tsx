import React from 'react';

export default function SeminarBenefits() {
  const benefits = [
    {
      pc: '低単価副業から抜け出すロードマップ',
      mobile: '低単価副業から\n抜け出すロードマップ'
    },
    {
      pc: '高単価案件を取るためのAIエンジニア思考',
      mobile: '高単価案件を取るための\nAIエンジニア思考'
    },
    {
      pc: '3ヶ月で単価5倍を狙う学習ステップ',
      mobile: '3ヶ月で単価5倍を\n狙う学習ステップ'
    },
    {
      pc: '案件獲得に役立つスキルマップ',
      mobile: '案件獲得に役立つ\nスキルマップ'
    }
  ];

  return (
    <section style={{ backgroundColor: 'white' }} className="md:py-15 py-5">
      <div
        style={{
          width: '90%',
          maxWidth: 'none',
          margin: '0 auto'
        }}
      >
        {/* 白いボックス全体 */}
        <div
          style={{
            background: 'white',
            borderRadius: '12px',
            border: '2px solid #e5e7eb',
            textAlign: 'center'
          }}
          className="md:p-10 p-5"
        >
          {/* タイトル */}
          <h2
            style={{
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '40px',
              fontSize: 'clamp(28px, 5vw, 32px)'
            }}
          >
            <span className="hidden md:inline">このセミナーで得られること</span>
            <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
              このセミナーで{"\n"}得られること
            </span>
          </h2>

          {/* セミナー画像 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
            <img
              src="/semina.png"
              alt="セミナーのイラスト"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* ベネフィット一覧 */}
          {/* PC版 */}
          <div className="hidden md:block">
            <div
              style={{
                textAlign: 'left',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
              className="px-6 md:!px-60"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginBottom: index < benefits.length - 1 ? '20px' : '0',
                    lineHeight: '1.6'
                  }}
                >
                  <span
                    style={{
                      color: '#22c55e',
                      fontSize: '20px',
                      marginRight: '12px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✅
                  </span>
                  <p style={{ color: '#374151', margin: 0, whiteSpace: 'pre-line', fontWeight: 'bold', fontSize: '24px' }}>
                    {benefit.pc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* モバイル版 */}
          <div className="md:hidden">
            <div
              style={{
                textAlign: 'left',
                maxWidth: '900px',
                margin: '0 auto'
              }}
              className="px-8"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginBottom: index < benefits.length - 1 ? '20px' : '0',
                    lineHeight: '1.6'
                  }}
                >
                  <span
                    style={{
                      color: '#22c55e',
                      fontSize: '20px',
                      marginRight: '12px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    ✅
                  </span>
                  <p style={{ color: '#374151', margin: 0, whiteSpace: 'pre-line', fontWeight: 'bold', fontSize: '18px' }}>
                    {benefit.mobile}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}