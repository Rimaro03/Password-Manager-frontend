const checkLogged = async (cookie) => {
  return await fetch(
    "https://password-manager-backend.vercel.app/user/addPasswordItem",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie,
      },
    }
  ).then(async (res) => {
    console.log(res);
    return await res.json();
  });
};
export default checkLogged;
