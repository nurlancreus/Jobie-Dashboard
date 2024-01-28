import { useSearchParams } from "react-router-dom";

export function useSwitchParams(id: string, checked: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = checked ? "on" : "off";

  const switchOn = (searchParams.get(id) ?? value) === "on";

  const handleSwitchParams = (checked: boolean) => {
    const value = checked ? "on" : "off";

    searchParams.set(id, value);
    setSearchParams(searchParams);
  };

  return { switchOn, handleSwitchParams };
}
