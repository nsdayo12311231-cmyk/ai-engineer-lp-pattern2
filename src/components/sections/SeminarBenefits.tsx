import Container from '../ui/Container';
import Card from '../ui/Card';

export default function SeminarBenefits() {
  const benefits = [
    '低単価副業から抜け出すロードマップ',
    '高単価案件を取るためのAIエンジニア思考',
    '3ヶ月で単価5倍を狙う学習ステップ',
    '案件獲得につながる具体的スキルマップ',
  ];

  const bonuses = [
    {
      title: '「高単価案件提案書フォーマット」',
      description: '→ 実際に案件獲得で使用された"生きた提案書"を公開！',
    },
    {
      title: '「2025年AI副業案件相場レポート」',
      description: '→ 未公開データで、今後伸びる副業領域と案件相場を一挙解説',
    },
  ];

  return (
    <section className="section-spacing bg-bg-secondary">
      <Container>
        <div className="space-y-xl">
          <div className="text-center">
            <div className="bg-accent-main py-3 px-6 rounded-lg inline-block">
              <h2 className="text-h2 text-gray-900">
                🎯 このセミナーで得られること
              </h2>
            </div>
          </div>

          <Card>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-accent-main p-4 rounded-lg">
            <h3 className="text-h3 text-gray-900 text-center mb-4">
              🎁 参加者限定特典
            </h3>
            <div className="space-y-3">
              {bonuses.map((bonus, index) => (
                <div key={index} className="space-y-1">
                  <p className="font-bold text-gray-900">
                    • {bonus.title}
                  </p>
                  <p className="text-sm text-gray-700 ml-4">
                    {bonus.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-text-emphasis mt-4">
              👉 今しか手に入らない2大特典です
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}