"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SinginButton = () => {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <>
      {status === "loading" ? (
        <></>
      ) : session ? (
        <button
          className=" bg-transparent hover:bg-white hover:text-l-bg ease-out duration-300 hover:scale-105 px-8 py-2 cursor-pointer rounded-3xl border border-white  text-white"
          onClick={() => signOut()}
        >
          Olá {session.user?.name}
        </button>
      ) : (
        <button
          className=" bg-transparent hover:bg-white hover:text-l-bg ease-out duration-300 hover:scale-105 px-8 py-2 cursor-pointer rounded-3xl border border-white  text-white"
          onClick={() => signIn("google")}
        >
          Acessar
        </button>
      )}
    </>
  );
};

export default SinginButton;
