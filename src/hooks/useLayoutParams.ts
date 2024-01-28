import { useSearchParams } from "react-router-dom";

export function useLayoutParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const layoutParamsValue = searchParams.get("layout") ?? "grid"

  const handleLayoutParams = (value: string) => {
    searchParams.set("layout", value);
    setSearchParams(searchParams);
  };
  return {layoutParamsValue, handleLayoutParams};
}
