import { useId, useState } from "react";
import RulesImage from "@/assets/images/image-rules-bonus.svg";
import CloseIcon from "@/assets/images/icon-close.svg";
import { ResultTable } from "@/utilities/eval-result";

export const RulesSection: React.FC = () => {
  const titleId = useId();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section aria-labelledby={titleId} className="flex justify-center lg:justify-end relative z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white border border-white rounded-md w-[8rem] h-10 tracking-[0.1563rem]"
      >
        RULES
      </button>

      <div
        className={`${isOpen ? "left-0" : "left-[-100vw]"}
        fixed top-0  h-screen w-full z-[50] grid place-items-center`}
      >
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className={"fixed inset-0 bg-black/50"}
          ></div>
        )}
        <div className="relative z-10 w-full h-full bg-white flex flex-col items-center justify-around lg:w-[25rem] lg:h-[28.8125rem] lg:rounded-lg lg:flex-row lg:flex-wrap lg:justify-between lg:px-8 lg:pt-8 lg:pb-12">
          <h2 id={titleId} className="text-3xl text-[#3B4262] font-bold lg:order-1 ">
            RULES
          </h2>
          <div className="w-[19.4375rem] lg:w-full lg:order-3 lg:flex lg:justify-center">
            <img src={RulesImage} alt="" />
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="close rules" className="lg:order-2">
            <img src={CloseIcon} alt="" />
          </button>
          <div className="sr-only">
            {Object.keys(ResultTable).map((game) => (
              <p key={game}>
                {game} : {(ResultTable as any)[game]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
