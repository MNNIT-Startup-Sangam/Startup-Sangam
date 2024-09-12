import type { Metadata } from "next";
import { Caveat, Gantari } from "next/font/google"; // Import Caveat and Gantari fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer component

const caveat = Caveat({
  subsets: ["latin"], // Specify the subset
  variable: "--font-caveat", // Set a CSS variable for the font
  weight: ["400", "700"], // Optional: Specify weights if needed
});

const gantari = Gantari({
  subsets: ["latin"], // Specify the subset
  variable: "--font-gantari", // Set a CSS variable for the font
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Optional: Specify weights if needed
});

export const metadata: Metadata = {
  title: "MNNIT Startup Sangam",
  description: "An Startup Meet organised by IIHMF MNNIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${gantari.variable}`}>
        <Navbar /> {/* Add Navbar component */}
        <main>{children}</main> {/* Main content area */}
        <Footer /> {/* Add Footer component */}
      </body>
    </html>
  );
}
