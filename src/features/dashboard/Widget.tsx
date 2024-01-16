type WidgetProps = {
  widget: {
    id: number;
    icon: JSX.Element;
    label: string;
    value: number;
  };
};

export default function Widget({ widget }: WidgetProps) {
  return (
    <article
      className={`widget-${widget.id} p-[40px_30px_30px] rounded-[28px] overflow-hidden`}
    >
      <div className="flex justify-between gap-8">
        <span className="grid place-content-center w-[68px] h-[68px] rounded-2xl border border-solid border-primary-300">
          {widget.icon}
        </span>
        <div className="flex flex-col items-end text-white">
          <p className="text-lg font-medium whitespace-nowrap">
            {widget.label}
          </p>
          <h3 className="text-5xl font-semibold">{widget.value}</h3>
        </div>
      </div>
    </article>
  );
}
