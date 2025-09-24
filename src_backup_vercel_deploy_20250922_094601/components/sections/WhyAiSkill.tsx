import React from 'react';

export default function WhyAiSkill() {
  return (
    <section
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative'
      }}
      className="md:py-15 py-5"
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
      <div
        style={{
          width: '90%',
          maxWidth: 'none',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* タイトル */}
        <h2
          style={{
            fontWeight: 'bold',
            marginBottom: '40px',
            color: 'white',
            textAlign: 'center'
          }}
          className="md:text-[36px] text-[28px]"
        >
          なぜ今AIスキルなのか？
        </h2>

        {/* 3つの白いカード */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
          className="md:flex-row flex-col"
        >
          {/* カード1: AI人材不足 */}
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              flex: '1',
              minWidth: '300px',
              maxWidth: '350px',
              textAlign: 'center',
              minHeight: '300px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <img
                src="/fusoku.png"
                alt="AI人材不足のイラスト"
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                日本はAI人材が不足。
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                数十万人規模とも言われ、
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                海外との差が開きつつある。
              </p>
            </div>
          </div>

          {/* カード2: 生成AIの普及 */}
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              flex: '1',
              minWidth: '300px',
              maxWidth: '350px',
              textAlign: 'center',
              minHeight: '300px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <img
                src="/tota.png"
                alt="生成AIの普及イラスト"
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                生成AIの普及で、
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                "使えるだけ"では淘汰される。
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                逆に"作れる人材"は希少価値が高い。
              </p>
            </div>
          </div>

          {/* カード3: スキルの需要拡大 */}
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              flex: '1',
              minWidth: '300px',
              maxWidth: '350px',
              textAlign: 'center',
              minHeight: '300px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <img
                src="/caria.png"
                alt="キャリアアップイラスト"
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                一度スキルを身につければ、
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                副業の案件獲得からキャリアアップまで、
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.4',
                  margin: '2px 0'
                }}
                className="md:text-[15px] text-[13px]"
              >
                長期的に需要が拡大する。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}