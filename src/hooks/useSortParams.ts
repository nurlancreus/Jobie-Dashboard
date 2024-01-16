import { useSearchParams } from "react-router-dom";

export default function useSortParams(field: string, defaultValue: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsValue = searchParams.get(field) ?? defaultValue;

  const handleParams = (value: string, field?: string) => {
    field && searchParams.set(field, value);
    setSearchParams(searchParams);
  };

  return { paramsValue, handleParams };
}
