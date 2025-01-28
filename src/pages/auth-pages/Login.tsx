import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { fetcher } from "../../utils/api";
import { Box, Grid2, Paper, Typography } from "@mui/material";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Replaces Next.js useRouter

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await fetcher("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const token = data.token;

      if (token) {
        // Store the token in cookies (expires in 1 day)
        Cookies.set("auth-token", token, { expires: 1 });

        // Redirect to dashboard after successful login
        navigate("/dashboard");
      } else {
        alert("Login failed. No token received.");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || "Login failed");
      } else {
        alert("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid2 container sx={{ height: "100vh" }}>
      {/* Left Side: Login Form */}
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 5,
          backgroundColor: "background.default",
        }}>
        {/* <Paper elevation={6} sx={{ p: 5 }}> */}
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            mb: 3,
            textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
          }}>
          Login to Your Plugin Stack
        </Typography>
        <AuthForm onSubmit={handleLogin} loading={loading} />
        <Box mt={2} display="flex" justifyContent="center">
          <Typography variant="body2" color="theme.palette.primary.main">
            Don't have an account?{" "}
            <Link to="/register" color="primary">
              Register
            </Link>
          </Typography>
        </Box>
        {/* </Paper> */}
      </Grid2>

      {/* Right Side: Image and Text */}
      <Grid2
        size={12}
        sx={{
          backgroundImage: "url('/logo.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box p={5} sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Your Plugin Stack
          </Typography>
          <Typography variant="body1">
            Manage plugins seamlessly with our platform.
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Login;
