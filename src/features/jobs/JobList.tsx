import { useSearchParams } from "react-router-dom";

type JobListProps<T> = {
  data: Array<T>;
  renderProps: (el: T) => JSX.Element;
};

export default function JobList<T>({ data, renderProps }: JobListProps<T>) {
  const [searchParams] = useSearchParams();
  const layoutParamsValue = searchParams.get("layout") ?? "grid";

  return (
    <div
      className={`grid ${
        layoutParamsValue === "grid"
          ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          : "grid-cols-2"
      } mt-[30px] gap-4 lg:gap-x-6 lg:gap-y-4 xl:gap-x-8 xl:gap-y-5 xxl:gap-x-[42px] xxl:gap-y-[30px]`}
    >
      {data.map(renderProps)}
    </div>
  );
}
