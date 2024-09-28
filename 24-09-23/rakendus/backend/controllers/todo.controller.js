const todo = [
  {
    id: 0,
    title: "Kodutoo",
    priority: 10,
    updatedAt: null,
    deleted: false,
  },
  {
    id: 1,
    title: "Uni",
    priority: 1,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { title, priority } = req.body;

  const newTodo = {
    id: todo.length,
    title: title,
    priority: priority,
    createdAt: Date.now,
    updatedAt: null,
    deleted: false,
  };
  /*cats.push({
    id: crypto.randomUUID(),
    name: name,
  });*/
  todo.push(newTodo);
  res.send("New todo added");
};

exports.read = (req, res) => {
  const activeTodos = todo.filter((todo) => !todo.deleted);
  res.send(activeTodos);
};

exports.update = (req, res) => {
  const { title, priority } = req.body;
  const { index } = req.params;

  if (!index) {
    return res.status(400).send("Index is undefined");
  }
  todo[index].updatedAt = Date.now();
  todo[index].title = title;
  todo[index].priority = priority;
  res.send(
    `Updating todo at index: ${index}, with new info: ${title} ${priority}`
  );
};

exports.delete = (req, res) => {
  const { index } = req.params;

  todo[index].deleted = true;
  res.send(`Todo at index ${index} has been deleted.`);
};
