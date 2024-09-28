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
  const { id } = req.params;

  const todoItem = todo.find((item) => item.id == id);

  if (!todoItem) {
    return res.status(404).send("Todo not found");
  }

  todoItem.updatedAt = Date.now();
  todoItem.title = title;
  todoItem.priority = priority;

  res.send(
    `Updating todo with ID: ${id}, with new info: ${title}, priority: ${priority}`
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const todoItem = todo.find((item) => item.id == id);

  console.log("Todo array:", todo); // Log the entire todo array
  console.log("ID to find:", id);

  if (!todoItem) {
    return res.status(404).send("Todo not found");
  }

  todoItem.deleted = true;

  const activeTodos = todo.filter((todo) => !todo.deleted);
  res.send(activeTodos);
};
