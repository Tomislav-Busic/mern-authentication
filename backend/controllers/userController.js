/*
@desc Register new user
@route POST /api/users
@access Public
*/
const registerUser = async (req, res) => {
  res.json({ message: "Register user" });
};

/*
@desc Authenticate a user
@route POST /api/users/login
@access Public
*/
const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};

module.exports = { registerUser };
