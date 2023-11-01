import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PhotoDroner76',
  description: 'Professionnel de prises de vues aériennes avec drone.',
  appleWebApp: true,
}

export const viewport: Viewport ={
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
