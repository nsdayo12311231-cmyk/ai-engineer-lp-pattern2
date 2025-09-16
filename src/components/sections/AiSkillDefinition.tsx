import Container from '../ui/Container';
import Card from '../ui/Card';

export default function AiSkillDefinition() {
  const skillPoints = [
    'AIを組み込んだ業務効率化ツールや副業サービスを自分で開発できる',
    '「使うだけ」ではなく「作れる」から、希少価値の高い人材になれる',
    '3ヶ月の学習で、副業単価を数倍に引き上げることも可能',
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="space-y-lg">
          <div className="text-center">
            <div className="bg-accent-main py-3 px-6 rounded-lg inline-block">
              <h2 className="text-h2 text-gray-900">
                🤖 AIエンジニアスキルとは？
              </h2>
            </div>
          </div>

          <Card>
            <div className="space-y-4">
              {skillPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}