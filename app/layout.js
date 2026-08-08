import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "Rickson Bozar | Full-Stack Developer",
  description:
    "Portfolio of Rickson Bozar, a full-stack developer building responsive web applications with React, Next.js, Node.js, and modern web technologies.",
  icons: {
    icon: "/rx-black-logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("theme");

                if (savedTheme === "dark") {
                  document.documentElement.classList.add("dark");
                } else if (savedTheme === "light") {
                  document.documentElement.classList.remove("dark");
                } else {
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.toggle("dark", prefersDark);
                }
              } catch (error) {}
            `,
          }}
        />
      </head>

      <body className={`${GeistSans.className} flex min-h-full flex-col bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}