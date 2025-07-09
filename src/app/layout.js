import { Geist, Geist_Mono,  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS"
  },
  description: "Trying To Learn NextJS As Best AS we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
