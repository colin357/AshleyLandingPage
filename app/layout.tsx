import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashley Hickmon | Fairway Home Mortgage — Loan Officer",
  description:
    "Work with Ashley Hickmon, SVP of Sales Development & Growth at Fairway Home Mortgage. Licensed in all 50 states. Get matched with the right home loan in minutes.",
  openGraph: {
    title: "Ashley Hickmon | Fairway Home Mortgage",
    description:
      "Licensed in all 50 states. Top 1% Mortgage Originator. Get your personalized home loan plan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
