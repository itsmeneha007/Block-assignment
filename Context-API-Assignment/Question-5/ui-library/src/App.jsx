
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProviderCustom, useThemeCustom } from "./contexts/ThemeContext";
import { Box } from "@mui/material";

function Layout() {
  const { theme } = useThemeCustom();

  return (
    <Box
      sx={{
        bgcolor: theme === "light" ? "#fafafa" : "#121212",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <MainContent />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <Layout />
      </ThemeProviderCustom>
    </AuthProvider>
  );
}
