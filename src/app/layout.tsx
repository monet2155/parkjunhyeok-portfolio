import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

const title = "PJH's Portfolio";
const description = "개발자 박준혁의 포트폴리오입니다.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description : description
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
