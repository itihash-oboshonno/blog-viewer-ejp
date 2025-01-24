import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog Viewer for EJP",
  description: "Ekhane kichu blogs ache",
};

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </KindeProvider>
  );
}
