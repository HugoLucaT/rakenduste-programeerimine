const cats = [
  {
    id: "d6f3d837-7f1f-45ec-86d9-214689cc7ba0",
    name: "Kass",
    createdAt: 1727099340757,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "b10cc88e-83d1-4113-95d5-dfd1ebf01a1b",
    name: "Juku",
    createdAt: 1727099348031,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };
  /*cats.push({
    id: crypto.randomUUID(),
    name: name,
  });*/
  cats.push(newCat);
  res.send("New cat added");
};

exports.read = (req, res) => {
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.send(activeCats);
};

exports.update = (req, res) => {
  const { name } = req.body;
  const { index } = req.params;

  if (!index) {
    return res.status(400).send("Index is undefined");
  }
  cats[index].updatedAt = Date.now();
  cats[index].name = name;
  res.send(`Updating cat at index: ${index}, with new name: ${name}`);
};

exports.delete = (req, res) => {
  const { index } = req.params;

  cats[index].deleted = true;
  res.send(`Cat at index ${index} has been deleted.`);
};
