/*
@desc Get goals
@route GET /api/goals
@access Private
*/
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

/*
@desc Set goal
@route POST /api/goals
@access Private
*/
const setGoal = (req, res) => {
  res.status(200).json({ message: "New goal" });
};

module.exports = {
  getGoals,
  setGoal
};
