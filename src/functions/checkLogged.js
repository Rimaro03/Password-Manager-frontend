const checkLogged = async (cookie) => {
  return await fetch(
    "https://password-manager-backend.vercel.app/user/logged",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie,
      },
    }
  ).then((res) => {
    return res;
  });
};
export default checkLogged;
