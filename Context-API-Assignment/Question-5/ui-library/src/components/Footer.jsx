import { Box, Typography } from "@mui/material";
import { useThemeCustom } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useThemeCustom();

  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: "center",
        bgcolor: theme === "light" ? "#eee" : "#222",
        position: "sticky",
        bottom: 0
      }}
    >
      <Typography variant="body2">© 2025 Dashboard</Typography>
    </Box>
  );
}
