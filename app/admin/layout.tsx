import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Provider from "../provider/provider";
import AdminPage from "./AdminPage";
import { redirect } from "next/navigation";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/option";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  const isAdmin =
    session?.user.role === "Admin" || session?.user.role === "admin";
  if (!isAdmin) {
    redirect("/404");
  }
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <AdminPage>{children}</AdminPage>
        </Provider>
      </body>
    </html>
  );
}
