const RecetaItem = ({ receta }) => {
  const { name, list, time } = receta;
  return (
    <div className="px-3 ">
      <div className="p-4 rounded-md w-[150px] bg-green-500	">
        <h1>{name}</h1>
        <div>----</div>
        <h1>{list}</h1>
        <div>----</div>
        <h1>{time}</h1>
      </div>
    </div>
  );
};

export default RecetaItem;
