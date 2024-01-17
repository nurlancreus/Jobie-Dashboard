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
        layoutParamsValue === "grid" ? "grid-cols-3" : "grid-cols-2"
      } mt-[30px] gap-x-[42px] gap-y-[30px]`}
    >
      {data.map(renderProps)}
    </div>
  );
}
