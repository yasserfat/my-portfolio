import Header from "@/components/header";
import "./globals.css";
import { IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { LanguageContextProvider } from "@/context/language-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Yasser Fetouhi | Computer vision & web development",
  description:
    "Yasser Fetouhi is a Master's student in Applied Image and Signal Processing in Salzburg, building computer vision models and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${body.variable} ${display.variable}`}>
      <body>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="bottom-center" />
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
