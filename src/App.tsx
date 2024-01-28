import QueryProvider from "./lib/react-query/QueryProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import AppRoutes from "./routes";
import ToastProvider from "./lib/react-hot-toast/ToastProvider";

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <SidebarProvider>
          <QueryProvider>
            <AppRoutes />
          </QueryProvider>
        </SidebarProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
