import { ReactNode } from "react";
import { Link } from "react-router-dom";

type SignInProps = {
  children: ReactNode;
  path: "/sign-in";
  label: "Sign In";
};

type SignUpProps = {
  children: ReactNode;
  path: "/sign-up";
  label: "Sign Up";
};

type FormFooterProps = {
  children: ReactNode;
} & (SignInProps | SignUpProps);

export default function FormFooter({ children, label, path }: FormFooterProps) {
  return (
    <footer>
      <p className="mt-5 text-base text-white">
        {children} <Link to={path}>{label}</Link>
      </p>
    </footer>
  );
}
