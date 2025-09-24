import React from 'react';

export default function AiSkillDefinition() {
  const skillPoints = [
    {
      pc: 'AIを組み込んだ業務効率化ツールや副業サービスを自分で開発できる',
      mobile: 'AIを組み込んだ業務効率化\nツールや副業サービスを\n自分で開発できる'
    },
    {
      pc: '「使うだけ」ではなく「作れる」から、希少価値の高い人材になれる',
      mobile: '「使うだけ」ではなく\n「作れる」から、\n希少価値の高い人材になれる'
    },
    {
      pc: '3ヶ月の学習で、副業単価を数倍に引き上げることも可能',
      mobile: '3ヶ月の学習で、副業単価を\n数倍に引き上げることも可能'
    },
  ];

  return (
    <section style={{ backgroundColor: 'white' }} className="md:py-15 py-5">
      <div
        style={{
          width: '90%',
          maxWidth: 'none',
          margin: '0 auto',
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
            marginBottom: '40px',
            color: '#333',
            display: 'block',
            fontSize: 'clamp(28px, 5vw, 32px)'
          }}
        >
          AIエンジニアスキルとは？
        </h2>

        {/* メイン画像 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px'
          }}
        >
          <img
            src="/lp3.png"
            alt="AIエンジニアのイラスト"
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              borderRadius: '12px'
            }}
          />
        </div>

        {/* スキルポイント */}
        <div
          style={{
            textAlign: 'left',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="px-6 md:!px-24"
        >
          {skillPoints.map((point, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginBottom: index < skillPoints.length - 1 ? '20px' : '0',
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
              <p style={{ color: '#374151', margin: 0, whiteSpace: 'pre-line', fontWeight: 'bold', fontSize: '22px' }}>
                <span className="hidden md:inline">{point.pc}</span>
                <span className="md:hidden">{point.mobile}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}