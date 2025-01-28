import { useState } from "react";
import AuthForm from "../../components/AuthForm";
import { fetcher } from "../../utils/api";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async ({ email: string, password: string }) => {
    setLoading(true);

    try {
      const data = await fetcher("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const message = data.message;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || "Registration failed");
      } else {
        alert("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 p-10 flex flex-col justify-center bg-gray-100">
        <h1 className="text-3xl mb-6 text-blue-500 drop-shadow-lg">
          Register for Your Plugin Stack
        </h1>
        <AuthForm onSubmit={handleRegister} loading={loading} />
        <div className="flex justify-center items-center mt-4">
          <p className="text-md text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-700 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/logo.png')" }}>
        <div className="p-10 text-white">
          <h2 className="text-4xl mb-4">Your Plugin Stack</h2>
          <p>Manage plugins seamlessly with our platform.</p>
        </div>
      </div>
    </div>
  );
}
