import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';  // Ensure this path matches your actual globals.css file path
import { ThemeProvider } from "@/components/providers/theme-provider";
import {cn} from '@/lib/utils';
import { ModeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          <ThemeProvider 
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


export const metadata: Metadata = {
  title: "GlobeTalk",
  description: "page of globe talk",
};

