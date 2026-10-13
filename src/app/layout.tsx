import type { Metadata } from "next";
import { FocusModality } from "@/components/focus-modality";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Insecto — design system", template: "%s | Insecto" },
  description: "Lokalna biblioteka tokena i komponenti za Insecto.",
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sr-Latn"><body><FocusModality /><a className="skip-link text-link" href="#main">Pređite na sadržaj</a>{children}</body></html>;
}
