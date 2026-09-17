import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Insecto — design system", template: "%s | Insecto" },
  description: "Lokalna biblioteka tokena i komponenti za Insecto.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sr-Latn"><body><a className="skip-link text-link" href="#main">Pređite na sadržaj</a>{children}</body></html>;
}
