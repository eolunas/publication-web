import type { Metadata } from "next";
import { PostProvider } from "../context/PostContext";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Publication-page",
  description: "Created by eolunas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-y-hidden">
        <PostProvider>
          {/* <NavBar /> */}
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
