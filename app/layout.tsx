import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXLA - Treinamento Completo em IA e Automação',
  description: 'Domine ChatGPT, Claude, Midjourney, n8n e outras ferramentas de IA. Aumente sua produtividade e crie novas fontes de renda sem programação.',
  keywords: 'chatgpt, claude, midjourney, n8n, automação, inteligência artificial, curso online, renda extra, produtividade',
  authors: [{ name: 'NEXLA' }],
  creator: 'NEXLA',
  publisher: 'NEXLA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexla.com.br'),
  openGraph: {
    title: 'NEXLA - Treinamento Completo em IA e Automação',
    description: 'Domine as principais ferramentas de IA e automação. ChatGPT, Midjourney, n8n e muito mais!',
    url: 'https://nexla.com.br',
    siteName: 'NEXLA',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXLA - Treinamento Completo em IA e Automação',
    description: 'Domine as principais ferramentas de IA e automação sem programação',
    creator: '@nexlabr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-dark">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}