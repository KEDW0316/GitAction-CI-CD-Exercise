const fakeUser = {
  username: "Dongwon",
  loggedIn: false,
};

export const login = (req, res) => {
  fakeUser.loggedIn = true;
  res.render("home", { pageTitle: "Home", fakeUser });
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
