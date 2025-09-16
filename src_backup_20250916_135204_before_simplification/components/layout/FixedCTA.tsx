'use client';

import Button from '@/components/ui/Button';

export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <Button
        variant="primary"
        size="large"
        className="w-full"
        onClick={() => window.open('https://example.com/seminar', '_blank')}
      >
        📱 無料セミナーに参加する
      </Button>
    </div>
  );
}