"use client";

import React, { Dispatch, SetStateAction, useRef } from "react";
import type { Product, Category } from "@/lib/generated/prisma";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  products: Product[];
  categories: Category[];
  activeTabs: string | null | never;
  setIsActive: Dispatch<SetStateAction<string | null>>;
};

export default function CollapsableCardClient({ products, categories, activeTabs, setIsActive }: Props) {
  const listTabs = useRef<HTMLDivElement | null>(null);
  const gridTabs = useRef<HTMLDivElement | null>(null);

  const findCategory = (categoriesId: number | null) => {
    if (categoriesId == null) return null;
    const category = categories.find((data) => data.id === categoriesId);
    return category ? (
      <span className="text-sm text-indigo-600 px-2 py-[2px] rounded-sm bg-indigo-50">{category.name}</span>
    ) : null;
  };

  useGSAP(() => {
    // gsap.set(listTabs.current, {
    //   opacity: 1,
    //   zIndex: 1
    // });
    // gsap.set(gridTabs.current, {
    //   opacity: 1,
    //   zIndex: 1
    // });

    if (activeTabs == "list") {
      gsap.to(listTabs.current, {
        opacity: 1,
        onStart: () => {
          gsap.to(listTabs.current, {
            zIndex: 1,
            duration: 0.35,
            ease: 'power2.out'
          });
        },
        duration: 0.35,
        ease: 'power2.out'
      });
      gsap.to(gridTabs.current, {
        opacity: 0,
        onComplete: () => {
          gsap.to(gridTabs.current, {
            zIndex: -1,
            duration: 0.35,
            ease: 'power2.out'
          });
        },
        duration: 0.35,
        ease: 'power2.out'
      });
    } else if (activeTabs == "grid") {
      gsap.to(listTabs.current, {
        opacity: 0,
        onComplete: () => {
          gsap.to(listTabs.current, {
            zIndex: -1,
            duration: 0.35,
            ease: 'power2.out'
          });
        },
        duration: 0.35,
        ease: 'power2.out'
      });
      gsap.to(gridTabs.current, {
        opacity: 1,
        onStart: () => {
          gsap.to(gridTabs.current, {
            zIndex: 1,
            duration: 0.35,
            ease: 'power2.out'
          });
        },
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  }, [activeTabs]);

  return (
    <div className="w-full h-full relative">
      <div ref={listTabs} className="absolute inset-x-4 inset-y-auto bg-white rounded-md border border-[#ebebeb] pb-2">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-[#ebebeb]">
              <th className="p-3 w-[36px] outfit-regular text-neutral-700 text-start">No</th>
              <th className="p-3 outfit-regular text-neutral-700 text-start">Name</th>
              <th className="p-3 outfit-regular text-neutral-700 text-start">Category</th>
              <th className="p-3 outfit-regular text-neutral-700 text-start">Price</th>
              <th className="p-3 outfit-regular text-neutral-700 text-start">Stock</th>
              <th className="p-3 outfit-regular text-neutral-700 text-start">View</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => {
              return (
                <tr key={index} className="border-b border-[#ebebeb] hover:bg-[#fafafa] transition-all">
                  <td className="p-3 text-nowrap text-neutral-800">{index + 1}</td>
                  <td className="p-3 text-nowrap text-neutral-800">{p.name}</td>
                  <td className="p-3 text-nowrap text-neutral-800">{findCategory(p.categoryId)}</td>
                  <td className="p-3 text-nowrap text-neutral-800">$ {p.price}</td>
                  <td className="p-3 text-nowrap text-neutral-800">{p.stock}</td>
                  <td className="p-3 text-nowrap text-neutral-800">
                    <button className="cursor-pointer flex items-center gap-2 border border-[#ebebeb] p-2 rounded-md bg-white hover:bg-[#fafafa] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>
                      <span className="text-sm text-neutral-700">See Details</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="p-2">
          <p className="text-neutral-700 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat asperiores ipsum ipsam mollitia? Nam quaerat libero dolorum ad tempora est quisquam repellendus magnam.</p>
        </div>
      </div>
      <div ref={gridTabs} className="absolute inset-x-4 inset-y-0 grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-md border border-[#ebebeb]">
            <div className="min-h-[5rem] flex items-start justify-between">
              <div className="">
                <h1 className="text-2xl text-neutral-900 outfit-regular">{p.name}</h1>
                {findCategory(p.categoryId)}
              </div>
              <button className="rounded-md bg-neutral-50 p-1 border border-transparent hover:border-[#ebebeb] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </button>
            </div>
            <div className="">
              <h3 className="text-3xl text-neutral-950 mb-1">$ {p.price}</h3>
              <p className="text-xs text-neutral-600 mb-4">{p.description}</p>
              <h3 className="text-sm text-neutral-600">Added at {new Date(p.createdAt).toLocaleDateString()}</h3>
              <div className="">
                {p.stock < 10 ? (
                  <h2 className="text-lg text-yellow-600 outfit-regular">{p.stock != 0 ? (`${p.stock} Stocks available`) : (
                    <span className="text-red-600">Empty</span>
                  )}</h2>
                ) : (
                  <h2 className="text-lg text-neutral-800 outfit-regular">{p.stock != 0 ? (`${p.stock} Stocks available`) : (
                    <span className="text-red-600">Empty</span>
                  )}</h2>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
