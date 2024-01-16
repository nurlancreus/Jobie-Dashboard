type TitleProps = {
  title: string
  subtitle?: string
}

export default function Titles({title, subtitle = "Based your preferences"}: TitleProps) {
  return (
    <div>
      <h4 className="text-base text-black font-semibold">
        {title}
      </h4>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </div>
  );
}
