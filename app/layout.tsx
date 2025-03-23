// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Next App',
  description: 'Aplikacja Next.js 13 z App Router',
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
