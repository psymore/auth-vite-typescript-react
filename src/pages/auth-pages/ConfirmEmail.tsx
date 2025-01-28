import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetcher } from "../../utils/api";

const ConfirmEmailPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // token from URL

  const confirmEmail = async () => {
    try {
      const response = await fetcher(`/auth/confirm-email?token=${token}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Email confirmed successfully!");
        // Navigate to the login page after successful confirmation
        navigate("/login");
      } else {
        setError(data.message || "Failed to confirm email.");
      }
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred.");
    }
  };

  useEffect(() => {
    if (token) {
      confirmEmail();
    }
  }, [token]);

  return (
    <div>
      {message ? <p>{message}</p> : <p>Verifying your email...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ConfirmEmailPage;
