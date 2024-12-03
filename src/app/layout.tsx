
import ReduxProvider from '@/common/store/Provider';
import Head from 'next/head';
import localFont from "next/font/local";
import "./../styles/globals.css";
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { locales } from '@/i18n/settings';

const geistSans = localFont({
  src: "./fonts/Roboto/Roboto-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "400",
});
const geistMono = localFont({
  src: "./fonts/Roboto/Roboto-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: 'Mountain Biking Adventures',
//   description: 'Mountain biking tours, lessons, and adventures in Bulgaria.',
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Mountain Biking Adventures",
  "name": "Mountain biking tours",
  "url": "https://www.mtbbulgariaadventures.com"
};

{/*TODO: add schema to head
  <title>Mountain Biking Adventures</title>
<meta name="description" content="Mountain biking tours, lessons, and adventures in Bulgaria." />
<meta name="robots" content="index, follow" />
<script type="application/ld+json">{JSON.stringify(schema)}</script>
</Head> 
   */}


export default async function  RootLayout({
  children,
}: RootLayoutProps) {
  
  return (
    <ReduxProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
    </ReduxProvider>
  );
}
