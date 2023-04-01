/*
@desc Register new user
@route POST /api/goals
@access Public
*/
const registerUser = async (req, res) => {
  res.json({ message: "Register user" });
};

module.exports = { registerUser };
