const fakeUser = {
  username: "Dongwon",
  loggedIn: false,
};

export const login = (req, res) => {
  res.send("login page");
  fakeUser.loggedIn = true;
  res.render("home", { pageTitle: "Home", fakeUser });
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
