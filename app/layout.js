import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rickson Bozar",
  icons:{
    icon:"/rx-black-logo.png",
  },
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}