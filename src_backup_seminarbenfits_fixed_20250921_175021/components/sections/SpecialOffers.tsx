import React from 'react';

export default function SpecialOffers() {
  return (
    <section style={{ backgroundColor: 'white' }} className="md:py-15 py-5">
      <div
        style={{
          width: '90%',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* 白いボックス全体 */}
        <div
          style={{
            backgroundImage: 'url(/97EBA90E-8328-4023-A02F-C05AFB31A8B4.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '12px',
            border: '2px solid #e5e7eb',
            position: 'relative'
          }}
          className="md:p-10 p-5"
        >
          {/* タイトル */}
          <h2
            style={{
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '30px'
            }}
            className="md:text-[36px] text-[28px]"
          >
            🎁 参加者限定特典 🎁
          </h2>

          {/* 金色のメダル画像 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '30px'
            }}
          >
            <img
              src="/tokuten.png"
              alt="特典メダル"
              style={{
                maxWidth: '120px',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* 特典1 */}
          <div style={{ marginBottom: '30px' }}>
            <h3
              style={{
                fontWeight: 'bold',
                color: '#ff3131',
                marginBottom: '10px',
                lineHeight: '1.4'
              }}
              className="md:text-[24px] text-[20px]"
            >
              高単価案件提案書フォーマット
            </h3>
            <p
              style={{
                color: '#333',
                lineHeight: '1.5',
                margin: 0
              }}
              className="md:text-[16px] text-[14px]"
            >
              → 実際に案件獲得で使用された<br />
              "生きた提案書"を公開！
            </p>
          </div>

          {/* 特典2 */}
          <div style={{ marginBottom: '30px' }}>
            <h3
              style={{
                fontWeight: 'bold',
                color: '#ff3131',
                marginBottom: '10px',
                lineHeight: '1.4'
              }}
              className="md:text-[24px] text-[18px]"
            >
              🗺️ AI×副業マネタイズロードマップ
            </h3>
            <p
              style={{
                color: '#333',
                lineHeight: '1.5',
                margin: 0
              }}
              className="md:text-[16px] text-[14px]"
            >
              副業からキャリアアップまで<br />
              未来の道筋を全公開！
            </p>
          </div>

          {/* 下部メッセージ */}
          <p
            style={{
              fontWeight: 'bold',
              color: '#ff3131',
              margin: 0,
              textAlign: 'center'
            }}
            className="md:text-[20px] text-[16px]"
          >
            今しか手に入らない2大特典です！！
          </p>
        </div>
      </div>
    </section>
  );
}