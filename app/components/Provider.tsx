import { SessionProvider } from "next-auth/react";

import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Provider: NextPage<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
