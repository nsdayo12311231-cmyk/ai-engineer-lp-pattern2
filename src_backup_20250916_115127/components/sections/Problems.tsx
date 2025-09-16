import Container from '@/components/ui/Container';

export default function Problems() {
  const problems = [
    '案件を取っても単価が安すぎる',
    '本業＋副業で時間ばかり奪われる',
    '頑張っているのに収入もキャリアも積み上がらない',
  ];

  return (
    <section className="section-spacing bg-bg-secondary">
      <Container>
        <div className="text-center space-y-lg">
          <div className="bg-accent-main py-3 px-6 rounded-lg">
            <h2 className="text-h2 text-gray-900">
              💭 こんな悩みを感じていませんか？
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">😟</span>
            </div>
            <ul className="space-y-3 text-left">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-base text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}