import { tabsIcons } from "@/components/contents/tabsIcons";
import { ArrowUpRightFromCircleIcon, Database, Eye, Calendar, ChartAreaIcon, CheckSquareIcon, Clock10Icon, DatabaseIcon, FolderArchiveIcon, SparklesIcon } from "lucide-react";

export const menu = [
  { page: "Dashboard", path: "/dashboard", icon: ChartAreaIcon },
  { page: "Database", path: "/database", icon: DatabaseIcon },
  { page: "My tasks", path: "/tasks", icon: CheckSquareIcon },
  { page: "Insights", path: "/insights", icon: SparklesIcon },
];

export const secondaryMenu = [
  { page: "Calendars", path: "/calendars", icon: Calendar },
  { page: "Reports", path: "/reports", icon: FolderArchiveIcon },
  { page: "Activities", path: "/activities", icon: Clock10Icon },
];

export const dashboardDataCard = [
  {
    title: "Page Views",
    value: "21,463",
    percentation: 15.8,
    isUp: true,
    icon: Eye
  },
  {
    title: "Total Revenue",
    value: "$ 263.95",
    percentation: 26.9,
    isUp: false,
    icon: Database
  },
  {
    title: "Bounce Rate",
    value: "86.5%",
    percentation: 24.5,
    isUp: true,
    icon: ArrowUpRightFromCircleIcon
  },
]

export const tabsOptions = [
  {
    name: "list",
    icon: tabsIcons[0],
  },
  {
    name: "grid",
    icon: tabsIcons[1],
  },
  {
    name: "json",
    icon: tabsIcons[2],
  },
]