import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "sonner";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
        src: "./fonts/GeistVF.woff",
        variable: "--font-geist-sans",
        weight: "100 900",
});
const geistMono = localFont({
        src: "./fonts/GeistMonoVF.woff",
        variable: "--font-geist-mono",
        weight: "100 900",
});

export const metadata: Metadata = {
        title: "Create Next App",
        description: "Generated by create next app",
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en">
                        <body
                                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                        >
                                {/* Wrap ThemeProvider with attribute="class" to manage theme classes */}
                                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                                        <NextTopLoader />
                                        <Toaster position="top-right" theme="dark" richColors />

                                        {children}
                                </ThemeProvider>
                        </body>
                </html>
        );
}

