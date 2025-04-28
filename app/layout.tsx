import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "BharatSe",
  description: "Get the Job Done!",
  generator: "Available in Kolkata (Coming to your city soon...)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Hire an Expert near You Now!" />
        <meta name="keywords" content="hire, expert, near you, BharatSe" />
        <meta property="og:title" content="BharatSe" />
        <meta
          property="og:description"
          content="Hire an Expert near You Now!"
        />
        <meta property="og:image" content="/banner.jpeg" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
