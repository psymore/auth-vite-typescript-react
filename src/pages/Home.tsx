import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ borderRadius: 2 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page!
        </Typography>
        <Typography variant="body1" gutterBottom>
          This page is public and does not require authentication.
        </Typography>

        <Typography variant="body2" gutterBottom mt={2}>
          Go to{" "}
          <Button component={Link} to="/login" variant="text" color="primary">
            login
          </Button>{" "}
          or{" "}
          <Button
            component={Link}
            to="/register"
            variant="text"
            color="primary">
            register
          </Button>
          to access the private pages.
        </Typography>
      </Box>
    </Container>
  );
}
