import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

type MainLogoProps = {
  variant?: "sidebar" | "header";
};

export default function MainLogo({ variant = "sidebar" }: MainLogoProps) {
  return (
    <div className={`h-[66px] ${variant === "header" ? "w-[160px]" : "w-[188px]"}`}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          width={188}
          height={66}
          className="h-full w-full object-fill"
        />
      </Link>
    </div>
  );
}
