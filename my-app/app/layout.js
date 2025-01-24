import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mal de Altura Records",
  description:
    "Desde 2013, Mal de Altura Records es un sello discográfico independiente en Las Palmas de Gran Canaria, especializado en música urbana y contemporánea. Ofrecemos servicios de grabación, producción, mezcla y mastering, brindando apoyo integral a artistas y compositores.",
  keywords: [
    "Mal de Altura Records",
    "sello discográfico independiente",
    "música urbana",
    "producción musical",
    "grabación",
    "mezcla",
    "mastering",
    "Las Palmas de Gran Canaria",
    "Canarias",
    "artistas",
    "estudio de grabación", 
    "mezcla y mastering", 
    "records",
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}