import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModalProvider } from '@/components/providers/ModalProvider';
import { ToasterProvider } from '@/components/providers/ToasterProvider';
import { CrispProvider } from '@/components/providers/CrispProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brainstormer',
  description: 'AI Sass Everything Generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
