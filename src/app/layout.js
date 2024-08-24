import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AppWalletProvider from "./AppWalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sol-Healthy",
  description:
    "A platform for healthcare in transparency on healthcare exchanges",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/solhealthy.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Toaster />
        <AppWalletProvider>
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
