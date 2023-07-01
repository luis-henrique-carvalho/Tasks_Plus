"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import TextArea from "../../components/TextArea";

const Dashboard = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("../signin?callbackUrl=/client");
    },
  });
  return (
    <div className=" w-full ">
      <main className=" bg-l-bg w-full flex items-center justify-center">
        <section className=" w-full max-w-screen-lg px-[18px] pb-7 mt-14 ">
          <div>
            <h1 className=" text-xl font-bold text-l-w-500 mb-2">
              Qual sua tarefa?
            </h1>
            <form action="">
              <TextArea />
              <div className=" text-l-w-500 py-3">
                <input className="w-5 h-5 " type="checkbox" />
                <label className=" ml-2">Deixar tarefa pública?</label>
              </div>
              <button
                className="text-l-w-500 border-none rounded w-full p-3 bg-l-ter"
                type="submit"
              >
                Registrar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
