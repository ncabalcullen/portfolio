import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "DevSystem Studio — Ingeniería de Software & Automatización",
  description:
    "Startup especializada en desarrollo fullstack, automatización de procesos y soluciones cloud empresariales. Buenos Aires, Argentina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
