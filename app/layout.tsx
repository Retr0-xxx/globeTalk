import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//imported for auth
import { ClerkProvider, RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';  // Ensure this path matches your actual globals.css file path

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
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}


export const metadata: Metadata = {
  title: "GlobeTalk",
  description: "page of globe talk",
};

