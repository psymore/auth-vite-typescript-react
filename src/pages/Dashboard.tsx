import { Button, Typography } from "@mui/material";
import { fetcher } from "../utils/api";

const Dashboard = () => {
  const handleLogout = () => {
    try {
      const response = await fetcher("/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || "Logout failed");
      } else {
        alert("Logout failed");
      }
    }
  };

  return (
    <>
      <Container sx={{ borderRadius: 2 }}>
        <h1>Welcome to the Dashboard!</h1>
        <Typography color="primary">
          This page is protected and requires authentication.
        </Typography>

        <Button onClick={handleLogout} variant="contained" color="error">
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Dashboard;
