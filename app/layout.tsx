import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatSe - Go HyperLocal",
  description:
    "BharatSe connects you with verified local service professionals and freelancers for all your personal, business, and creative needs. Available in Kolkata, expanding soon!",
  keywords: [
    "BharatSe",
    "hire expert near me",
    "local services India",
    "Kolkata freelancers",
    "trusted service providers",
    "find local professionals",
    "hyperlocal services",
    "freelancers India",
    "local jobs",
    "digital India",
    "support local",
  ],
  metadataBase: new URL("https://bharatse.vercel.app"),
  openGraph: {
    title: "BharatSe - Go HyperLocal",
    description:
      "Hire trusted freelancers and local service providers with BharatSe. Empowering communities and connecting skills with opportunities.",
    url: "https://bharatse.vercel.app",
    siteName: "BharatSe",
    images: [
      {
        url: "https://bharatse.vercel.app/banner1.jpeg", // public/banner1.jpeg
        width: 1200,
        height: 630,
        alt: "BharatSe - Go HyperLocal",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "BharatSe – Trusted Local Experts Near You",
  //   description:
  //     "Discover and book skilled freelancers and service providers in your area. Powered by BharatSe.",
  //   images: ["https://bharatse.vercel.app/banner1.jpeg"],
  //   creator: "@bharatseapp",
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // public/favicon.ico
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // You can add apple-touch-icon.png if needed
  },
  generator: "BharatSe Platform – Developed in Next.js",
  applicationName: "BharatSe",
  authors: [{ name: "Anirban Bandyopadhyay" }],
  themeColor: "#ffffff",
  colorScheme: "light",
  creator: "BharatSe Team",
  publisher: "BharatSe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
