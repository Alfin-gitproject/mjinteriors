import "./globals.scss";
import { Space_Grotesk } from "next/font/google";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--space-grotesk",
});

export const metadata = {
    title: "Mjinteriors - Best Interior Design & Architecture Company",
    description: "Best Interior Design & Architecture Company in Kerala, India. We provide top-notch interior design, architecture, and renovation services to transform your spaces.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable}`}>
            <head>
                {/* Favicon Links */}
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />

               
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
