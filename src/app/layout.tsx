import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tela | Your Marketplace for Quality Products",
  description: "Browse top vendors, find great deals, and pay safely through TELA's protected payment system.",
  metadataBase: new URL('https://tela.ng'),
  openGraph: {
    title: "Tela | Your Marketplace for Quality Products",
    description: "The all-in-one platform for commerce in Africa. Build, manage, and grow your business with ease.",
    url: 'https://tela.ng',
    siteName: 'Tela',
    images: [
      {
        url: '/logo.png', // Using the main logo as the social share image
        width: 1200,
        height: 630,
        alt: 'Tela Africa - Commerce for Everyone',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tela | Your Marketplace for Quality Products",
    description: "The all-in-one platform for commerce in Africa. Build, manage, and grow your business with ease.",
    images: ['/logo.png'],
    creator: '@mytelaapp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-[#093C15]/20">
        {children}
      </body>
    </html>
  );
}
