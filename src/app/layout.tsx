import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VNSH Holster + FREE QuickDraw Gun Magnet',
  description: 'Premium gun holsters and accessories',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'VNSH Holster + FREE QuickDraw Gun Magnet',
    description: 'Premium gun holsters and accessories',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'VNSH Holster Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNSH Holster + FREE QuickDraw Gun Magnet',
    description: 'Premium gun holsters and accessories',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
