"use client";

import { useState } from "react";
import type { Product, Category } from "@/lib/generated/prisma";
import { TabsToggleClient } from "./tabsToggle.client";
import CollapsableCardClient from "./collapsableCard.client";

type Props = {
  products: Product[];
  categories: Category[];
};

export default function CollapsableCardWrapper({ products, categories }: Props) {
  const [activeTabs, setActiveTabs] = useState<string | null>("list");

  return (
    <div>
      <TabsToggleClient isActive={activeTabs} setIsActive={setActiveTabs} />
      <CollapsableCardClient products={products} categories={categories} activeTabs={activeTabs} />
    </div>
  );
}
