import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


export const metadata = {
  title: "Rickson Bozar",
  icons: {
    icon: "/rx-black-logo.png",
  },
  description: "Personal Website",
};




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} `}
    >
      <body
        className={`${GeistSans.className} flex min-h-full flex-col bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
