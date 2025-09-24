import Container from '../ui/Container';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-15">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-gray-900">

          </div>
          <button className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="w-4 h-0.5 bg-gray-900 mb-1"></span>
            <span className="w-4 h-0.5 bg-gray-900 mb-1"></span>
            <span className="w-4 h-0.5 bg-gray-900"></span>
          </button>
        </div>
      </Container>
    </header>
  );
}