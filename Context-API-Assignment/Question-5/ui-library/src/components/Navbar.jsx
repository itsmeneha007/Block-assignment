import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useThemeCustom } from "../contexts/ThemeContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useThemeCustom();

  return (
    <AppBar position="static" color={theme === "light" ? "primary" : "secondary"}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          {isLoggedIn ? "Logged In" : "Logged Out"}
        </Typography>
        <div>
          <Button color="inherit" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <Button color="inherit" onClick={toggleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
