const { validationResult } = require("express-validator");

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
  const result = validationResult(req);
  if (result.isEmpty()) {
    const activeCats = cats.filter((cat) => !cat.deleted);
    res.send(activeCats);
  }

  res.send({ errors: result.array() });
};

exports.update = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const { name } = req.body;
    const { id } = req.params;

    const cat = cats.find((cat) => cat.id == id.trim());

    if (!cat) {
      return res.status(404).send("No cat by that id");
    }
    cat.name = name;
    cat.updatedAt = Date.now();

    res.send(`Cat with ID: ${id} updated with new name: ${name}`);
  }

  res.send({ errors: result.array() });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const cat = cats.find((cat) => cat.id == id.trim());

  if (!cat) {
    return res.status(404).send("No cat by that id");
  }

  cat.deleted = true;
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.send(activeCats);
};
