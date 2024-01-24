type TitleProps = {
  title: string
  subtitle?: string
}

export default function Titles({title, subtitle = "Based your preferences"}: TitleProps) {
  return (
    <div>
      <h4 className="text-base text-dark font-semibold whitespace-nowrap">
        {title}
      </h4>
      <p className="text-sm text-gray-300 whitespace-nowrap">{subtitle}</p>
    </div>
  );
}
