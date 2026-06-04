import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'P.P. Maniya Education & Medical Trust | Registered National NGO',
  description: 'Late Popatbhai Premjibhai Maniya Education & Medical Trust is a premium Indian charitable trust dedicated to uplifting lives through education support, healthcare assistance, and rural community development.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#F8FAFC] text-[#1E293B] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
