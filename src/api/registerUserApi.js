export const registerUser = async (formData) => {
  const url = "http://localhost:3000/api/v1/user/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    return {response, result};
  } catch (error) {
    console.log(error.message);
  }
};
