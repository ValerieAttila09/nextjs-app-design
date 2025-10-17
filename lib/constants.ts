import { Calendar, ChartAreaIcon, CheckSquareIcon, Clock10Icon, DatabaseIcon, FolderArchiveIcon, SparklesIcon } from "lucide-react";

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