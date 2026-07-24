import { useContext } from "react";
import { customApi } from "./customApi";

export const getUserApi = async () => {
  const url = "http://localhost:3000/api/v1/user/getUser";
  try {
    const response = await customApi(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();
    console.log(response);

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "User Not Fetched");
    }
  } catch (error) {
    console.log(error.message);
  }
};
