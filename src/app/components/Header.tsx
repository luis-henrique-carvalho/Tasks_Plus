import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="w-full h-19 bg-l-bg flex items-center justify-center">
      <section className=" px-4 py-5 w-full max-w-7xl flex flex-row justify-between">
        <nav className="flex  items-center">
          <Link href="/" >
            <h1 className="text-white text-2xl">
              Tarefas<span className=" text-l-sec">+</span>
            </h1>
          </Link>
          <Link href="/dashboard" className=" bg-white text-l-bg py-1 rounded px-3 mx-4">
            <h1 className="">Meu painel</h1>
          </Link>
        </nav>
        <button className=" bg-transparent hover:bg-white hover:text-l-bg ease-out duration-300 hover:scale-105 px-8 py-2 cursor-pointer rounded-3xl border border-white  text-white">
          Acessar
        </button>
      </section>
    </header>
  );
};

export default Header;
