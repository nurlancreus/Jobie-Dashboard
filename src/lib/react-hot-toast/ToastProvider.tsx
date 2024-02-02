import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              border: "1px solid green",
            },
          },
          error: {
            duration: 5000,
            style: {
              border: "1px solid red",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--body-bg)",
            color: "var(--dark-clr)",
          },
        }}
      />
    </>
  );
}
