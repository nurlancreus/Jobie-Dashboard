import useLayoutParams from "@/hooks/useLayoutParams";

type CompanyListProps<T> = {
  data: Array<T>;
  renderProps: (el: T) => JSX.Element;
};

export default function CompanyList<T>({
  data,
  renderProps,
}: CompanyListProps<T>) {
  const { layoutParamsValue } = useLayoutParams();

  return (
    <div
      className={`mt-6 lg:mt-8 grid gap-x-5 gap-y-4 xl:gap-x-7 xl:gap-y-6 xxl:gap-x-8 xxl:gap-y-7 ${
        layoutParamsValue === "grid" ? "xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "xl:grid-cols-2"
      }`}
    >
      {data.map(renderProps)}
    </div>
  );
}
