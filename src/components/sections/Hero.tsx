export default function Hero() {
  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px' }}>
      <div className="w-full" style={{ margin: 0, padding: 0 }}>
        {/* モバイル用画像 */}
        <div
          className="block md:hidden w-full"
          style={{
            aspectRatio: '1 / 1',
            width: '100vw',
            height: '100vw',
            maxHeight: '100vh',
            backgroundImage: 'url(/hero-mobile.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: 0,
            padding: 0
          }}
        />

        {/* デスクトップ用画像 */}
        <div
          className="hidden md:block w-full"
          style={{
            aspectRatio: '16 / 9',
            width: '100vw',
            height: 'calc(100vw * 9 / 16)',
            maxHeight: '80vh',
            backgroundImage: 'url(/hero-desktop.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </section>
  );
}