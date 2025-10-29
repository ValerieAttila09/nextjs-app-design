"use client";

import { Dispatch, SetStateAction } from "react"
import { tabsOptions } from "@/lib/constants";

const ToggleButton = ({
  active, setActive
}: {
  active: string | never | null;
  setActive: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <>
      {tabsOptions.map((opt, index) => {
        const isOptActive = opt.name == active ? "bg-[#fafafa]" : "bg-white";
        const roundedButton = ["rounded-s-md", "", "rounded-e-md"];
        const borderButton = ["border border-[#ebebeb]", "border border-l-0 border-[#ebebeb]", "border border-l-0 border-[#ebebeb]"];
        return (
          <button
            onClick={() => {
              setActive(opt.name);
              console.log(`Active : ${opt.name}`);
            }}
            key={opt.name}
            className={`${roundedButton[index]} ${borderButton[index]} ${isOptActive} flex items-center justify-center hover:bg-[#fafafa] transition-all px-5 py-2`}
          >
            {opt.icon}
          </button>
        );
      })}
    </>
  )
}

export function TabsToggleClient({
  isActive, setIsActive
}: {
  isActive: string | never | null;
  setIsActive: Dispatch<SetStateAction<string | null>>
}) {
  return (
    <div className="w-full px-4 py-2">
      <h2 className="text-4xl outfit-semibold mb-2">Produk Terbaru</h2>
      <div className="mb-4 flex items-center justify-start">
        <ToggleButton active={isActive} setActive={setIsActive} />
      </div>
    </div>
  )
}