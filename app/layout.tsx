import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider/provider";
import { getServerSession } from "next-auth";

// import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        {" "}
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
