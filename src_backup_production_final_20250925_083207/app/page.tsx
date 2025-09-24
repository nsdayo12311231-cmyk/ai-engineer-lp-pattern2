import Header from '../components/layout/Header';
import FixedCTA from '../components/layout/FixedCTA';
import Hero from '../components/sections/Hero';
import Problems from '../components/sections/Problems';
import Solution from '../components/sections/Solution';
import AiSkillDefinition from '../components/sections/AiSkillDefinition';
import WhyAiSkill from '../components/sections/WhyAiSkill';
import OtherSeminars from '../components/sections/OtherSeminars';
import SeminarBenefits from '../components/sections/SeminarBenefits';
import SpecialOffers from '../components/sections/SpecialOffers';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="pt-0">
        <Hero />
        <Problems />
        <Solution />
        <AiSkillDefinition />
        <WhyAiSkill />
        <OtherSeminars />
        <SeminarBenefits />
        <SpecialOffers />

        {/* CTA セクション */}
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
          {/* ダークオーバーレイ */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1
            }}
          ></div>

          <div
            style={{
              width: '90%',
              maxWidth: 'none',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center'
            }}
          >
            {/* 赤文字メッセージ */}
            <p
              style={{
                fontWeight: 'bold',
                color: '#ff3131',
                marginBottom: '20px',
                lineHeight: '1.4',
                whiteSpace: 'pre-line'
              }}
              className="md:text-[24px] text-[20px]"
            >
              <span className="hidden md:inline">席数が埋まり次第、受付終了となります。</span>
              <span className="md:hidden">席数が埋まり次第、{'\n'}受付終了となります。</span>
            </p>

            {/* 白文字メッセージ */}
            <div
              style={{
                marginBottom: '40px'
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '10px',
                  lineHeight: '1.4'
                }}
              >
                下のボタンから残席数をチェック！
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: 0,
                  lineHeight: '1.4'
                }}
              >
                未来を変える第一歩を！
              </p>
            </div>

            {/* CTAボタン */}
            <button
              style={{
                background: 'linear-gradient(135deg, #ff6b35, #f39c12)',
                color: 'white',
                fontWeight: 'bold',
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              無料セミナーに参加する
            </button>
          </div>
        </section>

        {/* 会社情報 */}
        <section className="section-spacing bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center">
              <h3 className="text-h3 text-gray-900 mb-2">株式会社SKH</h3>
              <p className="text-base text-text-secondary">
                大阪府吹田市千里山東2-4-3
              </p>
            </div>
          </div>
        </section>

        {/* 固定CTA用の余白 */}
        <div className="h-20"></div>
      </main>
      <FixedCTA />
    </>
  );
}