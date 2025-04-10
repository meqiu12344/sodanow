// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'SodaNow | Wymiana Butli CO2 Szybko i Wygodnie - Wrocław i okolice',
  description:
    'SodaNow to szybka i wygodna wymiana butli CO2 do saturatorów na terenie Wrocławia i okolic. Zamów już dziś i ciesz się świeżą wodą sodową!',
  keywords: [
    'wymiana butli CO2',
    'butle CO2 Wrocław',
    'saturator CO2',
    'gaz do saturatora',
    'SodaStream wymiana',
    'nabijanie butli CO2',
  ],
  robots: 'index, follow',
  author: 'SodaNow Team',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'SodaNow | Wymiana Butli CO2 Szybko i Wygodnie',
    description:
      'SodaNow to szybka i wygodna wymiana butli CO2 do saturatorów na terenie Wrocławia i okolic. Zamów już dziś!',
    url: 'https://sodanow.vercel.app/',
    siteName: 'SodaNow',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SodaNow | Wymiana Butli CO2',
    description:
      'SodaNow to szybka i wygodna wymiana butli CO2 do saturatorów na terenie Wrocławia i okolic.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}