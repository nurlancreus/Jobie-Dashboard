import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isScreenSmall: boolean;
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export default function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  const isOpen = isLargeOpen || isSmallOpen;

  const isScreenSmall = useMediaQuery("(max-width: 992px)");

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall) setIsSmallOpen(false);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [isScreenSmall, isSmallOpen]);

  function toggle() {
    if (isScreenSmall) {
      setIsSmallOpen((prev) => !prev);
    } else setIsLargeOpen((prev) => !prev);
  }

  function close() {
    if (isScreenSmall) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        isScreenSmall,
        isLargeOpen,
        isSmallOpen,
        isOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSidebarContext() {
  const contextValue = useContext(SidebarContext);
  
  if (contextValue == null)
    throw Error("Cannot use outside of SidebarProvider");

  return contextValue;
}
