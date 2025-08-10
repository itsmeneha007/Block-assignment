import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useThemeCustom } from "../contexts/ThemeContext";

const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

export default function MainContent() {
  const { theme } = useThemeCustom();

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {products.map((product, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card sx={{ bgcolor: theme === "light" ? "#fff" : "#444" }}>
            <CardContent>
              <Typography>{product}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
