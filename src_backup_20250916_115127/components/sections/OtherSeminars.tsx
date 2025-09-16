import Container from '@/components/ui/Container';

export default function OtherSeminars() {
  const commonProblems = [
    '動画を見て終わり',
    '資格取得やノウハウコレクターで終わる',
    '「副業で稼げる」と言うだけで実務に直結しない',
  ];

  return (
    <section className="section-spacing bg-white">
      <Container>
        <div className="space-y-xl">
          <div className="text-center">
            <div className="bg-gray-100 py-3 px-6 rounded-lg inline-block">
              <h2 className="text-h2 text-gray-900">
                ⚠️ 他セミナー・講座でよくあること
              </h2>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
            <div className="space-y-3">
              {commonProblems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">❌</span>
                  <p className="text-base text-gray-700">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-info p-4 rounded-lg">
            <div className="space-y-2 text-center">
              <p className="font-bold text-blue-600">
                👉 多くのセミナーは"知識止まり"
              </p>
              <p className="font-bold text-blue-600">
                👉 このセミナーでは、実務と案件に直結する具体的ステップを公開します！
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}