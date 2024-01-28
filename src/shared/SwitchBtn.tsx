import { useSwitchParams } from "@/hooks/useSwitchParams";

type SwitchBtn = {
  label: string;
  id: string;
  checked: boolean;
};

export default function SwitchBtn({ label, id, checked }: SwitchBtn) {
  const { switchOn, handleSwitchParams } = useSwitchParams(id, checked);

  return (
    <div className="flex items-center gap-5">
      <span className="whitespace-nowrap text-base font-medium text-gray-700">
        {label}
      </span>
      <label
        role="checkbox"
        htmlFor={id}
        className={`relative h-4 w-8 cursor-pointer rounded-3xl after:absolute after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:transition-all after:duration-300 after:content-[''] lg:after:h-5 lg:after:w-5 xl:after:h-6 xl:after:w-6 ${
          switchOn
            ? "bg-primary-300 after:translate-x-[20px] after:bg-primary dark:bg-purple-950"
            : "bg-gray-100 after:translate-x-[-10px] after:bg-gray-300 dark:bg-neutral-600"
        }`}
      />
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={switchOn}
        onChange={(e) => handleSwitchParams(e.target.checked)}
        className="invisible"
      />
    </div>
  );
}
