import placeholder from "@/assets/images/placeholder.png";

type LogoProps = {
  src: string | null;
  w: number;
  h: number;
};

export default function Logo({ src, w, h }: LogoProps) {
  return (
    <img
      src={src || placeholder}
      alt="Logo"
      width={w}
      height={h}
      className={`w-[${w}px] h-[${h}px] rounded-3xl object-cover`}
    />
  );
}
