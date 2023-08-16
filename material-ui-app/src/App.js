import { Container, Paper, Typography, Box, Button } from "@mui/material";
import "./App.css";

const serviceList = ["Service1", "Service2", "Service3"];

function App() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "space-between",
          pt: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 360 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2, fontSize: 12 }}
              >
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default App;
