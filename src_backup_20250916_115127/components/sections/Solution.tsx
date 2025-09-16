import Container from '@/components/ui/Container';

export default function Solution() {
  return (
    <section className="section-spacing bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Container>
        <div className="text-center space-y-lg">
          <div className="space-y-4">
            <h2 className="text-h2">
              🚀 解決方法は...
            </h2>
            <h3 className="text-h1">
              AIエンジニアスキルを身に付けることです！
            </h3>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-base leading-relaxed">
              これからの時代は"AIを使う人"ではなく、
              <span className="font-bold text-yellow-300">"AIを作れる人"</span>
              が必要とされます。
            </p>

            <p className="text-base leading-relaxed">
              単純作業や価格競争から抜け出し、
              <span className="font-bold text-yellow-300">「仕組みを作れる人材」</span>
              になることで、案件単価は劇的に変わります。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}