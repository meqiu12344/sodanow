// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'SodaNow',
  description: 'SodaNow - Wymiana butli CO2',
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
