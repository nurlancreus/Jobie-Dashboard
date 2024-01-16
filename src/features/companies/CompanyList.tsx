import useLayoutParams from "@/hooks/useLayoutParams";

type CompanyListProps<T> = {
  data: Array<T>;
  renderProps: (el: T) => JSX.Element
};

export default function CompanyList<T>({ data, renderProps }: CompanyListProps<T>) {
  const {layoutParamsValue} = useLayoutParams()

  return (
    <div
      className={`grid gap-x-8 gap-y-[28px] ${
        layoutParamsValue === "grid" ? "grid-cols-4" : "grid-cols-2"
      }`}
    >
      {data.map(renderProps)}
    </div>
  );
}
