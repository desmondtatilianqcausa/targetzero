import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Target Zero Portal",
    template: "%s | Target Zero",
  },
  description:
    "Florida Department of Transportation safety information and resources with a focus on impaired driving prevention.",
  applicationName: "Target Zero",
  icons: [{ rel: "icon", url: "/Web Assets/FDOT Logo_K.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans-face",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${nunitoSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
