import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ProfileProvider } from "@/context/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whisker Wonderland",
  description: "Welcome to Purrfect Paws - Your One-Stop Cat Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="http://localhost:8097"></script>
        <script src="http://192.168.1.48:8097"></script>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <ProfileProvider>
            <>
              <Navbar />
              <div className="bg-gray-100">
                {children}
              </div>
              <Footer />
            </>
          </ProfileProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
