import Header from '@/components/layout/Header';
import FixedCTA from '@/components/layout/FixedCTA';
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import Solution from '@/components/sections/Solution';
import AiSkillDefinition from '@/components/sections/AiSkillDefinition';
import WhyAiSkill from '@/components/sections/WhyAiSkill';
import OtherSeminars from '@/components/sections/OtherSeminars';
import SeminarBenefits from '@/components/sections/SeminarBenefits';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-15">
        <Hero />
        <Problems />
        <Solution />
        <AiSkillDefinition />
        <WhyAiSkill />
        <OtherSeminars />
        <SeminarBenefits />

        {/* CTA セクション */}
        <section className="section-spacing bg-bg-info">
          <div className="container-custom">
            <div className="text-center space-y-lg">
              <p className="text-h3 text-gray-900">
                📅 席数には限りがあります。<br />
                今すぐ下のボタンからご登録を！
              </p>
              <button className="cta-button">
                📱 無料セミナーに参加する
              </button>
            </div>
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