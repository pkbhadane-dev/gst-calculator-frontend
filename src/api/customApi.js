export const customApi = async (url, options) => {
  let response = await fetch(url, options);

  if (response.status === 401) {
    const tokenResponse = await fetch(
      "http://localhost:3000/api/v1/user/getUser/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      },
    );

    if (tokenResponse.ok) {
      response = await fetch(url, options);
    } else {
      console.log("Refresh token also expired, redirect to login");
    //   window.location.href = "/login";
    }
  }
  return response;
};
