import { createContext, useState, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import CloseButton from "./CloseButton";

type ModalContextType = {
  openName: string;
  open: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
};

// 1. Create context
const ModalContext = createContext<ModalContextType>({} as ModalContextType);

// 2. Create parent component
export default function Modal({ children }: { children: JSX.Element }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {cloneElement(children, { onCloseModal: close })}
    </ModalContext.Provider>
  );
}

// 3. Create child components
function ModalOpen({
  children,
  opens: opensWindowName /*renderButton*/,
}: {
  children: JSX.Element;
  opens: string;
}) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });

  // return renderButton(() => open(opensWindowName));  IF WE WRITE IT WITH RENDER PROPS
}

function ModalWindow({
  children,
  name,
}: {
  children: JSX.Element;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]"
        onClick={close}
      />
      <div className="absolute left-1/2 top-1/2 z-50 max-w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-6">
        <span className="[&_svg]:h-5 [&_svg]:w-5">
          <CloseButton close={close} />
        </span>
        <div>{children}</div>
      </div>
    </>,
    document.body,
  );
}

// 4. Add child components as properties
Modal.Open = ModalOpen;
Modal.Window = ModalWindow;
