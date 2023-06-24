import RecetaForm from "./RecetaForm";
import RecetaItem from "./RecetaItem";
import React, { useEffect, useState } from "react";

const RecetaList = () => {
  const [recetaCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([
    {
      name: "Pizza",
      list: "Salsa de tomate, queso y peperoni",
      time: "30 minutos",
    },
  ]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
  };

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas]);

  return (
    <>
      <h1 className="p-1 rounded-md w-[150px] bg-yellow-400">Numero recetas: {recetaCount}</h1> <br />
      <RecetaForm onSubmit={addReceta} />
      <ul className="flex gap-4 py-4 ">
        {recetas.map((receta) => (
          <li>
            <RecetaItem receta={receta} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecetaList;
