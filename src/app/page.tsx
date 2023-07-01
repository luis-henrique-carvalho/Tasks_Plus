// Components
import Image from "next/image";
import Link from "next/link";
// Assets
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <div className=" bg-l-bg w-full h-screen flex flex-col justify-center  items-center">
      <main>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="max-w-28 sm:max-w-sm w-auto h-auto object-contain"
            src={heroImg}
            alt="Logo Tarefas"
            priority={true}
          />
        </div>
        <h1 className=" text-white text-center text-3xl max-tablet:text-xl m-7 font-bold leading-normal">
          Sistema feito para você organizar <br /> seus estudos e tarefas
        </h1>

        <div className="flex justify-between  max-tablet:flex-col  items-center">
          <section className="bg-l-w-500 py-4 px-11 max-tablet:w-4/5  max-tablet:mb-4 max-tablet:text-center rounded ease-out duration-300 hover:scale-105 cursor-pointer">
            <span>+12 posts</span>
          </section>
          <section className="bg-l-w-500 py-4 px-11 max-tablet:w-4/5 max-tablet:mb-4 max-tablet:text-center rounded ease-out duration-300 hover:scale-105 cursor-pointer">
            <span>+12 comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}
