import QueryProvider from "./lib/react-query/QueryProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import AppRoutes from "./routes";

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <QueryProvider>
          <AppRoutes />
        </QueryProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
