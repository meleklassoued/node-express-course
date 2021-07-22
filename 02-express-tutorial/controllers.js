const { people } = require("./data");

const postPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please type again" });
  }
  res.send(201).send({ success: true, person: name });
};

const postPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please type again" });
  }
  res.send(201).send({ success: true, person: name });
};

const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id == id) {
      person.name = name;
    }
    console.log(person);
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id == id);
  if (!person) {
    res.status(404).json({
      success: false,
      msg: `this person is not here with this is of ${id}`,
    });
  }
  const newPeople = people.filter((person) => person.id != id);
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  postPeople,
  postPostman,
  putPeople,
  deletePeople,
};
