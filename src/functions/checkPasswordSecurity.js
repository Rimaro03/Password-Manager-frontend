const checkPasswordSecurity = async (passwordList) => {
  const strongPasswordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  let passwords = {
    safe: {
      perc: 0,
      list: [],
    },
    weak: {
      perc: 0,
      list: [],
    },
    reused: {
      perc: 0,
      list: [],
    },
  };

  let checkedPasswords = [];
  passwordList.forEach((passwordObj) => {
    let passwordURL = passwordObj.url;
    if (checkedPasswords.includes(passwordURL)) {
      passwords.reused.list.push(passwordObj);
    } else {
      if (!strongPasswordRegex.test(passwordObj.password)) {
        passwords.weak.list.push(passwordObj);
      } else {
        passwords.safe.list.push(passwordObj);
      }
      checkedPasswords.push(passwordURL);
    }
  });

  const calcPercetage = (section) => {
    const totalPasswords = passwordList.length;
    passwords[section].perc = Number(
      ((passwords[section].list.length * 100) / totalPasswords)
        .toString()
        .slice(0, 4)
    );
  };

  calcPercetage("safe");
  calcPercetage("weak");
  calcPercetage("reused");

  return passwords;
};

export default checkPasswordSecurity;
