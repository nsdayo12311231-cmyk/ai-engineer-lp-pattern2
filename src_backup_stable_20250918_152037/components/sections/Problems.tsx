import Container from '../ui/Container';

export default function Problems() {
  const problems = [
    { pc: '低単価案件ばかりで、時間だけ消耗している', mobile: '低単価案件ばかりで、\n時間だけ消耗している' },
    { pc: '副業を続けても、収入が頭打ちで将来が見えない', mobile: '副業を続けても、\n収入が頭打ちで将来が見えない' },
    { pc: 'AIを学んだが実務に直結しない', mobile: 'AIを学んだが\n実務に直結しない' },
  ];

  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '40px 16px',
      }}
    >
      <Container>
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
            maxWidth: 'none'
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '16px',
              padding: '60px 40px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            className="md:p-16 p-5"
          >
            {/* タイトル */}
            <h2
              style={{
                fontWeight: 'bold',
                color: '#1f2937',
                textAlign: 'center',
                margin: '0 0 32px 0',
                lineHeight: '1.3'
              }}
              className="md:text-[40px] text-[24px]"
            >
              <span className="hidden md:inline">こんな悩みを感じていませんか？</span>
              <span className="md:hidden" style={{ whiteSpace: 'pre-line' }}>
                こんな悩みを{'\n'}感じていませんか？
              </span>
            </h2>

            {/* イラスト */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '32px'
              }}
            >
              <img
                src="/jitumu.png"
                alt="悩んでいる女性のイラスト"
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>

            {/* 問題リスト */}
            <div
              style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              {problems.map((problem, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginBottom: index < problems.length - 1 ? '12px' : '0'
                  }}
                >
                  <p style={{
                    lineHeight: '1.6',
                    color: '#1f2937',
                    margin: 0,
                    fontWeight: 'bold',
                    whiteSpace: 'pre-line'
                  }}
                  className="md:text-[24px] text-[18px]"
                  >
                    <span className="hidden md:inline">{problem.pc}</span>
                    <span className="md:hidden">{problem.mobile}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}