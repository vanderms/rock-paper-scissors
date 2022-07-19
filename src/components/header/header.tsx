import Logo from "@/assets/images/logo-bonus.svg";
import { useId } from "react";

export const Header: React.FC<{ score: number }> = ({ score }) => {
  const titleId = useId();
  return (
    <section
      aria-labelledby={titleId}
      className={`mt-8 w-full h-24 border-[0.1875rem] border-white/25 rounded-md 
      flex justify-between items-center pl-6 pr-3`}
    >
      <h1 id={titleId} className="sr-only">
        Rock Paper Scissors Lizard Spock
      </h1>
      <img src={Logo} alt="" className="w-[3.0625rem] h-12" />
      <article
        className={`w-20 h-[4.5rem] flex flex-col items-center justify-center rounded
        bg-[linear-gradient(0deg,_#F3F3F3_0%,_#FFFFFF_100%)]
        shadow-[0px_3px_3px_rgba(0,0,0,0.196706)]
      `}
      >
        <h2 className="[font-size:0.625rem] [line-height:0.75rem] text-[#2A45C2]">SCORE</h2>
        <p className="[font-size:2.5rem] [line-height:1] text-[#565468] font-bold">{score}</p>
      </article>
    </section>
  );
};
