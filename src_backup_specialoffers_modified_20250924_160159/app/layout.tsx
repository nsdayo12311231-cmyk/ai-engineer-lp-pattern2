import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3ヶ月で副業単価5倍！AIエンジニアスキル無料セミナー | 株式会社SKH',
  description: 'AIを作れる人材になって副業単価を劇的アップ。実践型カリキュラムで3ヶ月で成果を実感。無料セミナー開催中！',
  keywords: 'AI,エンジニア,副業,プログラミング,スキルアップ,セミナー',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '3ヶ月で副業単価5倍！AIエンジニアスキル無料セミナー',
    description: 'AIを作れる人材になって副業単価を劇的アップ',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-noto">{children}</body>
    </html>
  );
}
