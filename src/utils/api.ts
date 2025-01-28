export const fetcher = async (endpoint: string, options: RequestInit) => {
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_BACKEND_API_URL}${endpoint}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
