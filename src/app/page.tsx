"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "public/logo-vtsd.svg";
import LogoRtg from "public/rtg-logo.svg";
import Arrow from "public/arrow-down.svg";
import SVG from "public/corner-vector.svg";
import SVGM from "public/corner-vector-mob.svg";
import { Data } from "./components/data";
import { Card } from "./components";

export default function Home() {

  const [data, setData] = useState(Data);

  const [newGroupMember, setNewGroupMember] = useState({
    name: "",
    number: "",
    picture: "",
  });

  const [selectedGroupTitle, setSelectedGroupTitle] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroupMember({ ...newGroupMember, [name]: value });
  };

  const handleSelectChange = (e) => {
    setSelectedGroupTitle(e.target.value);
  };

  const addNewGroupMember = () => {
    setData(data.map(entry => {
      if (entry.title === selectedGroupTitle) {
        return {
          ...entry,
          group: [...entry.group, newGroupMember]
        };
      }
      return entry;
    }));
    setNewGroupMember({ name: "", number: "", picture: "" });
    setSelectedGroupTitle("");
  };


  return (
    <main className="bg-[#F2F2F2] relative min-h-screen flex flex-col">
      <section className="lg:max-w-[46.93rem] max-w-[19rem] mx-auto flex flex-col items-center pt-[4.62rem] flex-grow">
        <Image src={Logo} alt="Logo" />
        <h1 className="lg:text-[3rem] text-[1.5rem] text-[#353639] lg:leading-[4rem] leading-[2rem] font-bold text-center lg:mt-[4.19rem] mt-[2.31rem]">
          Conheça nossos <span className="text-[#04C8B6]">vendedores e telefones oficiais</span>
        </h1>
        <Image className="lg:mt-[1.75rem] mt-[2.31rem] lg:w-auto w-[1.625rem]" src={Arrow} alt="Arrow" width={50} height={50} />
      </section>
      <section className="h-fit relative">
        <div className="flex flex-wrap justify-center w-fit mx-auto lg:mt-[3.06rem] mt-[2.19rem] gap-[.94rem] pb-[5rem] relative z-10">
          {Data.map((data, index) => (
            <Card.Root key={index}>
              <Card.Main
                title={data.title}
                logo={data.logo}
                w={data.w}
                h={data.h}
                group={data.group}
              />
            </Card.Root>
          ))}

           {/* Form for adding a new group member
           <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewGroupMember();
          }}
          className="flex flex-col gap-4 mt-8 mx-auto"
        >
          <select
            value={selectedGroupTitle}
            onChange={handleSelectChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select Group</option>
            {data.map((entry, index) => (
              <option key={index} value={entry.title}>
                {entry.title}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            value={newGroupMember.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="number"
            value={newGroupMember.number}
            onChange={handleInputChange}
            placeholder="Number"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="picture"
            value={newGroupMember.picture}
            onChange={handleInputChange}
            placeholder="Picture URL"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add New Group Member
          </button>
        </form> */}

        </div>
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <Image src={SVG} alt="SVG Desktop" />
        </div>
        <div className="absolute bottom-0 right-0 lg:hidden">
          <Image src={SVGM} alt="SVG Mobile" />
        </div>
      </section>
      <footer className="bg-white py-8 relative z-10 mt-auto">
        <div className="flex lg:flex-row flex-col items-center justify-around lg:text-[0.75rem] text-[0.625rem] lg:gap-0 gap-4 text-[#C8C8C8] font-semibold">
          <p>Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26</p>
          <div className="flex items-center lg:gap-4 gap-2">
            <p>Designed by</p>
            <Image src={LogoRtg} alt="Logo RTG" />
          </div>
        </div>
      </footer>
    </main>
  );
}
