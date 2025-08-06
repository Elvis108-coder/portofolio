// app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elvis Kiprono | Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
