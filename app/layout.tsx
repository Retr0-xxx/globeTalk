import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//imported for auth
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';  // Ensure this path matches your actual globals.css file path

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
//**** 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobeTalk",
  description: "page of globe talk",
};

