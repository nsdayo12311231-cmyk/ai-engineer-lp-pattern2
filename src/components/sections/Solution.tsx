import React from 'react';

export default function Solution() {
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
          textAlign: 'center',
          color: 'white',
          width: '100%',
          maxWidth: 'none',
          margin: '0',
          position: 'relative',
          zIndex: 2,
          padding: '0 4px',
        }}
      >
        {/* タイトル */}
        <h2
          style={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white'
          }}
          className="md:text-[43px] text-[22px]"
        >
          解決方法は...
        </h2>

        <h3
          style={{
            fontWeight: 'bold',
            marginBottom: '30px',
            color: 'white',
            lineHeight: '1.3'
          }}
          className="md:text-[53px] text-[24px]"
        >
          <span className="hidden md:inline">
            AIエンジニアスキルを<br />
            身に付けることです！
          </span>
          <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
            AIエンジニアスキルを{'\n'}身に付けることです！
          </span>
        </h3>

        {/* 人物画像 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
          }}
        >
          <img
            src="/kaiketu.png"
            alt="AIエンジニアスキルを身に付けた人たち"
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              borderRadius: '12px'
            }}
          />
        </div>

        {/* 説明テキスト */}
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            maxWidth: 'none',
            margin: '0',
            lineHeight: '1.8'
          }}
        >
          <p
            style={{
              marginBottom: '20px',
              color: 'white'
            }}
            className="md:text-[27px] text-[14px]"
          >
            <span className="hidden md:inline">
              これからの時代は"AIを使う人"ではなく、<br />
              <span style={{
                fontWeight: 'bold',
                color: '#ff3131'
              }}>"AIを作れる人"</span>
              が必要とされます。
            </span>
            <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
              これからの時代は{'\n'}"AIを使う人"ではなく、{'\n'}
              <span style={{
                fontWeight: 'bold',
                color: '#ff3131'
              }}>"AIを作れる人"が{'\n'}必要とされます。</span>
            </span>
          </p>

          <p
            style={{
              marginBottom: '20px',
              color: 'white'
            }}
            className="md:text-[27px] text-[14px]"
          >
            <span className="hidden md:inline">
              単純作業や価格競争から抜け出し、<br />
              <span style={{
                fontWeight: 'bold',
                color: '#ff3131'
              }}>"仕組みを作れる人材"</span>
              になることで、
            </span>
            <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
              単純作業や価格競争から抜け出し、{'\n'}
              <span style={{
                fontWeight: 'bold',
                color: '#ff3131'
              }}>"仕組みを作れる人材"になることで、</span>
            </span>
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#ff3131'
            }}
            className="md:text-[32px] text-[16px]"
          >
            案件単価は劇的に変わります。
          </p>
        </div>
      </div>
    </section>
  );
}