import { useEffect, useState } from "react";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch("http://localhost:8080/cats");
      const data = await response.json();

      setCats(data);
    };
    fetchCats();
  }, []);
  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{JSON.stringify(cat)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cats;
