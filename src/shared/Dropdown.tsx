import { Link } from "react-router-dom";

type DropdownProps = {
  close: () => void;
  list: Array<{
    icon: JSX.Element;
    label: string;
    path: string;
    onClick?: () => void;
  }>;
};

export default function Dropdown({ list, close }: DropdownProps) {
  return (
    <>
      <div className="fixed inset-0 z-10" onClick={close} />
      <ul className="absolute -bottom-3 lg:-bottom-5 xl:-bottom-6 -left-20 z-10 w-[8rem] lg:w-[9rem] xl:w-[12.5rem] translate-y-full rounded-2xl bg-card py-4 shadow-[0_0_37px_rgba(8,21,66,0.05)]">
        {list.map((listItem) => (
          <li
            key={listItem.label}
            onClick={() => {
              listItem.onClick?.();
              close();
            }}
          >
            <Link
              to={listItem.path}
              className="flex items-center gap-3 whitespace-nowrap bg-transparent px-6 py-2 text-sm text-gray-700 transition hover:bg-neutral-200 dark:hover:bg-transparent"
            >
              <span>{listItem.icon}</span>
              <span>{listItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
