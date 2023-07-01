import { NextPage } from "next";
import Link from "next/link";
import SinginButton from "./SinginButton";
import { useSession } from "next-auth/react";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const { data: session, status } = useSession();
  return (
    <header className="w-full h-19 bg-l-bg flex items-center justify-center">
      <section className=" px-4 py-5 w-full max-w-7xl flex flex-row justify-between">
        <nav className="flex  items-center">
          <Link href="/">
            <h1 className="text-white text-2xl">
              Tarefas<span className=" text-l-sec">+</span>
            </h1>
          </Link>
          {session?.user && (
            <>
              <Link
                href="/client/dashboard"
                className=" bg-white text-l-bg py-1 rounded px-3 mx-4"
              >
                <h1 className="">Meu painel</h1>
              </Link>{" "}
              <Link
                href="/server"
                className=" bg-white text-l-bg py-1 rounded px-3 mx-4"
              >
                <h1 className="">Servidor</h1>
              </Link>
            </>
          )}
        </nav>
        <SinginButton />
      </section>
    </header>
  );
};

export default Header;
