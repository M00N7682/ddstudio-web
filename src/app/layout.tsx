import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ddstudio | 개발 그 이상의 파트너",
  description:
    "디디스튜디오는 외주 개발과 협력 개발을 전문으로 하는 소프트웨어 개발 스튜디오입니다.",
  openGraph: {
    title: "ddstudio | 개발 그 이상의 파트너",
    description:
      "디디스튜디오는 외주 개발과 협력 개발을 전문으로 하는 소프트웨어 개발 스튜디오입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
