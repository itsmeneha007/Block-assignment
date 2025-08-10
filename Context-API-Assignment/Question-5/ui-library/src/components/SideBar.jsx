

import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useThemeCustom } from "../contexts/ThemeContext";

export default function Sidebar({ mobileOpen, onClose }) {
  const { isLoggedIn } = useAuth();
  const { theme } = useThemeCustom();

  const drawerContent = (
    <List>
      {isLoggedIn && (
        <ListItem>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Welcome User
          </Typography>
        </ListItem>
      )}
      <ListItem button>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: theme === "light" ? "#f0f0f0" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: theme === "light" ? "#f0f0f0" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          },
        }}
        ModalProps={{
          keepMounted: true, 
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
