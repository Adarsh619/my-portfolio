import { Space_Grotesk, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '700'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });

export const metadata = {
  title: 'Adarsh Pradhan R — Frontend & Full-Stack Developer',
  description: 'Frontend and full-stack developer in Bengaluru. React, Next.js, TypeScript, RAG and AI-integrated web applications.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a0a0b'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
