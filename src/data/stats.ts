type IStat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: IStat[] = [
  { value: 6, suffix: "+", label: "Years shipping software" },
  { value: 10, suffix: "+", label: "Companies on my HRIS" },
  { value: 1000, suffix: "+", label: "Employees using it daily" },
  { value: 90, suffix: "%", label: "Less manual HR work" },
];

export default stats;
export type { IStat };
