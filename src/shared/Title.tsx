import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  fs?: number;
  fw?: "medium" | "semibold" | "bold";
  caseForm?: "capitalize" | "uppercase";
};

export default function Title({
  children,
  fs = 20,
  fw = "medium",
  caseForm = "capitalize",
}: TitleProps) {
  //const fontSize = `${fs}px`;

  const fontSizeVariants: Record<number, string> = {
    18: "text-[18px]",
    20: "text-[clamp(16px,2vw,20px)]",
    24: "text-[clamp(20px,2vw,24px)]",
    28: "text-[clamp(24px,2vw,28px)]",
  };

  const fontWeightVariants: Record<string, string> = {
    medium: "font-medium",
    semibold: "font-semibold",
  };

  return (
    <h3
      className={`${fontSizeVariants[fs]} ${fontWeightVariants[fw]} leading-[30px] ${caseForm}`}
    >
      {children}
    </h3>
  );
}
