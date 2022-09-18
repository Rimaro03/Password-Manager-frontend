const checkLogged = async (cookie) => {
  return await fetch(
    "https://password-manager-backend.vercel.app/user/addPassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie,
      },
    }
  ).then(async (res) => {
    return res.json();
  });
};
export default checkLogged;
