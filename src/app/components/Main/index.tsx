import Image from "next/image";
import Teams from "../Teams";  // Import the Teams component

interface GroupProps {
  name: string;
  number: string;
  picture: string;
}

interface MainProps {
  title: string;
  logo: string;
  w: number;
  h: number;
  group: GroupProps[];
}

export default function Card({
  title,
  logo,
  h,
  w,
  group,
}: MainProps) {
  return (
    <div className="flex flex-col items-center py-[1.88rem] px-[1.12rem] bg-white rounded-[1.125rem] gap-[1.25rem]">
      <Image
        src={logo}
        alt={title}
        width={w}
        height={h}
      />
      {group.map((member, index) => (
        <Teams
          key={index}
          name={member.name}
          number={member.number}
          picture={member.picture}
          width={46.69}
          height={46.69}
        />
      ))}
    </div>
  );
}
