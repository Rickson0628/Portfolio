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
      <body className={`${GeistSans.className} min-h-full flex flex-col antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
