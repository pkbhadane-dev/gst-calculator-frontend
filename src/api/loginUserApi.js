export const loginUser = async () => {
  const url = "http://localhost:3000/api/v1/user/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(response.message || "Failed to login", response);
    }

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
