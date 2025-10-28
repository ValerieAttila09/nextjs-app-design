"use client";

import { tabsOptions } from "@/lib/constants";
import { useState } from "react";
import { TabsToggleClient } from "./tabsToggle.client";

let activeTabs: string | null = "";

export function TabsToggle() {
  const [isActive, setIsActive] = useState<string | null>(tabsOptions[0].name);
  activeTabs = isActive
  return <TabsToggleClient isActive={isActive} setIsActive={setIsActive}/>
}

export default activeTabs