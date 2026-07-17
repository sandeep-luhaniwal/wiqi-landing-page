import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WiQi - All Your Entertainment & Communication In One Place",
  description: "Experience the future of entertainment with Wiqi. Movies, games, chats, music, live streams, calls, and smart features in one ecosystem.",
  keywords: "wiqi, super app, entertainment, communication, streaming, gaming, chat, music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
