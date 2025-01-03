import localFont from "next/font/local";
import "./../globals.css";
import Leftsidebar from "@/components/Leftsidebar";
import Rightsidebar from "@/components/Rightsidebar";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loader from "@/components/Loader";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="flex justify-between max-w-6xl mx-auto">
              <div className="hidden sm:inline border-r h-screen sticky top-0">
                <Leftsidebar />
              </div>
              <div className="max-w-2xl flex-1">{children}</div>
              <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
                <Rightsidebar />
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
