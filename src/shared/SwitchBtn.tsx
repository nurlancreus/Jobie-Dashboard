import useSwitchParams from "@/hooks/useSwitchParams";

type SwitchBtn = {
  label: string;
  id: string;
  checked: boolean;
};

export default function SwitchBtn({ label, id, checked }: SwitchBtn) {
  const { switchOn, handleSwitchParams } = useSwitchParams(id, checked);

  return (
    <div className="flex items-center gap-5">
      <span className="font-medium text-gray-700">{label}</span>
      <label
        role="checkbox"
        htmlFor={id}
        className={`w-8 h-4 rounded-3xl relative cursor-pointer after:content-[''] after:w-6 after:h-6 after:transition-all after:duration-300 after:rounded-full after:absolute after:bottom-[-4px] ${
          switchOn
            ? "bg-primary-300 after:bg-primary after:translate-x-[20px]"
            : "bg-gray-100 after:bg-gray-300 after:translate-x-[-10px]"
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
