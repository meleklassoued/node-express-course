const getAllTasks = (req, res) => {
  res.send("all ITEMS FROM HHHH");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({id:req.params.id})
};
const updateTask = (req, res) => {
  res.send("okey I will");
};
const deleteTask = (req, res) => {
  res.send("okey right now");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
