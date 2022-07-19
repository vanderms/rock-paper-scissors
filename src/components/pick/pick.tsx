import { Item, ItemType } from "../item/item";

export const PickCard: React.FC<{ text: string; type: ItemType | null }> = ({
  text,
  type,
}) => {
  return (
    <div className="flex flex-col items-center w-max gap-4 lg:flex-col-reverse lg:gap-[3.9375rem]">
      <div className="relative w-[8.125rem] h-[8.125rem] grid place-items-center lg:w-[18.25rem] lg:h-[18.75rem]">
        {type ? (
          <Item type={type} />
        ) : (
          <div className="w-[6.875rem] h-[6.875rem] bg-[rgba(0,0,0,0.1)] rounded-full"></div>
        )}
      </div>
      <p className="text-white font-bold tracking-widest [font-size:0.9375rem] lg:[font-size:1.5rem]">{text}</p>
    </div>
  );
};
