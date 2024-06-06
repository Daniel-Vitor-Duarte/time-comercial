import Image from "next/image";
import Bandeira from "public/bandeira.svg";

interface GroupProps {
  name: string;
  number: string;
  picture: string;
  width: number;
  height: number;
}

export default function Teams({
  name,
  number,
  picture,
  width,
  height,
}: GroupProps) {
  return (
    <div className="flex gap-[1.44rem] items-center px-[2.5rem] py-[.72rem] border border-[#EDEDED] rounded-[0.625rem] lg:bg-white bg-[#FAFAFA]">
      <Image
        src={picture}
        alt={name}
        width={width}
        height={height}
      />
      <div className="w-[0.0625rem] h-[2.875rem] bg-[#DFDFDF]"></div>
      <Image src={Bandeira} alt="" />
      <div>
        <p className="text-[#6D6D6D] text-[1.13969rem] font-medium">{name}</p>
        <p className="text-[#ABABAB] text-[0.85475rem] font-semibold">(61) 9 {number}</p>
      </div>
    </div>
  );
}
