export interface DashboardData {
  title: string;
  value: number | string;
  percentation: number | string;
  isUp: boolean;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
