import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://dheeraj-ingle-portfolio.vercel.app"),
  title: {
    default: "Dheeraj Ingle · Associate Product Manager Portfolio",
    template: "%s · Dheeraj Ingle",
  },
  description:
    "World-class product portfolio showcasing PM analytics SaaS, AI case studies, and Google APM 2026 readiness. Data-driven PM with technical expertise and leadership.",
  keywords: [
    "Product Manager",
    "Google APM",
    "Product Analytics",
    "Data-driven PM",
    "SaaS",
    "AI/ML Products",
    "User Research",
    "A/B Testing",
    "Product Strategy",
    "Dheeraj Ingle"
  ],
  authors: [{ name: "Dheeraj Ingle", url: "https://linkedin.com/in/dheeraj-ingle" }],
  creator: "Dheeraj Ingle",
  openGraph: {
    title: "Dheeraj Ingle · Associate Product Manager Portfolio",
    description:
      "PM Analytics Platform founder, data-driven PM, applying for Google APM 2026. Building impactful products with AI and analytics.",
    url: "https://dheeraj-ingle-portfolio.vercel.app",
    siteName: "Dheeraj Ingle Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Dheeraj Ingle - Associate Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheeraj Ingle · APM Portfolio",
    description:
      "Data-driven PM portfolio with analytics, AI, and case studies. Google APM 2026 candidate.",
    creator: "@dheerajingle_",
    images: ["/headshot-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
