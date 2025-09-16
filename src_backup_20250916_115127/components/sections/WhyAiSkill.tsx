import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function WhyAiSkill() {
  const reasons = [
    {
      icon: '💡',
      text: '世界規模でAI人材不足、日本は特に遅れ',
    },
    {
      icon: '⚡',
      text: '生成AIの普及で「誰でもできる作業」は淘汰される',
    },
    {
      icon: '🚀',
      text: '「作れる人」は副業・キャリア双方で需要拡大',
    },
  ];

  return (
    <section className="section-spacing bg-bg-secondary">
      <Container>
        <div className="space-y-xl">
          <div className="text-center">
            <div className="bg-accent-main py-3 px-6 rounded-lg inline-block">
              <h2 className="text-h2 text-gray-900">
                🌟 なぜ今AIスキルなのか？
              </h2>
            </div>
          </div>

          <Card>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{reason.icon}</span>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-text-emphasis text-white p-4 rounded-lg text-center">
            <p className="font-bold text-base">
              👉 今学ぶことで先行者メリットを得られる絶好のチャンス！
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}