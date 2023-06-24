const RecetaForm = ({ onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const list = form[1].value;
    const time = form[2].value;
    const receta = { name, list, time };
    onSubmit(receta);
    form.reset();
  };

  return (
    <form onSubmit={submit}>
      <h1 className=" text-green-500 text-2xl font-serif">Ingresa:</h1><br></br>
      <input type="text" placeholder="Nombre" className="bg-transparent font-serif	"/>
      <input type="text" placeholder="Ingredientes" className="bg-transparent	 font-serif	"/>
      <input type="text" placeholder="Tiempo de preparacion"  className="bg-transparent font-serif "/>
      <button type="submit" className="text-green-500	font-bold font-serif	"> Agregar </button>
    </form>
  );
};

export default RecetaForm;
