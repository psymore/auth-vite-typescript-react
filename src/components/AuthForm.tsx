import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { FC, useState } from "react";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        startIcon={loading && <CircularProgress size={20} />}>
        {loading ? "Loading..." : "Submit"}
      </Button>
    </Box>
  );
};

export default AuthForm;
