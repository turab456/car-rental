// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/style.css";
import "./globals.css";
import Schema from "./components/Schema";
import NavigationWrapper from "../components/NavigationWrapper";
import { BookingProvider } from "../context/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental Service - Fast & Reliable",
  description:
    "Book your car rental easily with our fast, reliable, and affordable car rental services. Perfect for travel, airport pickup, and city tours.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://google.com",
    title: "Car Rental Service - Fast & Reliable",
    description:
      "Book your car rental easily with our fast, reliable, and affordable car rental services. Perfect for travel, airport pickup, and city tours.",
    images: [
      {
        url: "/slider1.jpg",
        width: 1200,
        height: 630,
        alt: "Car Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Service - Fast & Reliable",
    description:
      "Book your car rental easily with our fast, reliable, and affordable car rental services. Perfect for travel, airport pickup, and city tours.",
    images: ["/slider1.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BookingProvider>

          <Schema />
          <BootstrapClient />
          <NavigationWrapper>
            {children}
          </NavigationWrapper>
        </BookingProvider>
      </body>
    </html>
  );
}
