import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Park Seongha — Backend & Systems Engineer',
  description: '박성하의 서버·백엔드 개발 포트폴리오. 서비스 설계, API 구현, 데이터 구조 및 문제 해결 경험을 소개합니다.',
  openGraph: {
    title: 'Park Seongha | Beyond the screen. Build the system.',
    description: 'Backend & Systems Engineering Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="ko"><body>{children}</body></html>;
}
