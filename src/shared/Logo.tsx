type LogoProps = {
  src: string;
  w: number;
  h: number;
};

export default function Logo({ src, w, h }: LogoProps) {
  return (
    <img
      src={src}
      alt="Logo"
      width={w}
      height={h}
      className={`w-[${w}px] h-[${h}px] rounded-3xl object-cover`}
    />
  );
}
