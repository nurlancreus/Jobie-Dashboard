import QueryProvider from "./lib/react-query/QueryProvider";
import ToastProvider from "./lib/react-hot-toast/ToastProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import AppRoutes from "./routes";
import ErrorBoundaryProvider from "./lib/react-error-boundary/ErrorBoundaryProvider";

export default function App() {
  return (
    <ErrorBoundaryProvider>
      <ThemeProvider>
        <ToastProvider>
          <SidebarProvider>
            <QueryProvider>
              <AppRoutes />
            </QueryProvider>
          </SidebarProvider>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundaryProvider>
  );
}
