import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Provider from "../provider/provider";
import AdminPage from "./AdminPage";
import { options } from "../api/auth/[...nextauth]/option";
import { ReactNode } from "react";
import store from "../components/ServerComponents/StatementStorage";
import { Provider as ReduxProvider } from "react-redux";
import { NavStateProvider } from "../components/ClientComponets/NavStateContext";

interface User {
  role: string;
}
interface Session {
  user: User;
}

const isAdminUser = (user: User | null | undefined): boolean => {
  return user?.role === "Admin" || user?.role === "admin";
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session: Session | null | undefined = await getServerSession(options);
  const isAdmin = isAdminUser(session?.user);

  if (!isAdmin) {
    redirect("/404");
    return null;
  }

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <NavStateProvider>
            <AdminPage>{children}</AdminPage>
          </NavStateProvider>
        </Provider>
      </body>
    </html>
  );
}
