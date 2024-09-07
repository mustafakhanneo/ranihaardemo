import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ['300', '600', '900'],
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});
const adelia = localFont({
  src: './fonts/adelia.ttf',
  display: 'swap',
  variable: '--font-adelia',
})
const archivo = localFont({
  src: './fonts/Archivo-Regular.ttf',
  display: 'swap',
  variable: '--font-archivo',
})
const nature = localFont({
  src: './fonts/nature.ttf',
  display: 'swap',
  variable: '--font-nature',
})
const tanker = localFont({
  src: './fonts/Tanker-Regular.ttf',
  display: 'swap',
  variable: '--font-tanker',
})
const nunito = localFont({
  src: './fonts/Nunito-Regular.ttf',
  display: 'swap',
  variable: '--font-nunito',
})
const pilcrow = localFont({
  src: './fonts/PilcrowRounded-Heavy.ttf',
  display: 'swap',
  variable: '--font-pilcrow',
})


export const metadata: Metadata = {
  title: "Rani Haar",
  description: "Rani Haar - The Mughal Era jewellery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${adelia.variable} ${nunito.variable} ${nature.variable} ${archivo.variable} ${pilcrow.variable} ${tanker.variable} ${rubik.variable} bg-white`}><HydrationOverlay>{children}</HydrationOverlay></body>
    </html>
  );
}
