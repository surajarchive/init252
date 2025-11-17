function Cards({src, title, description}) {
  return (
    <div className="h-96 w-72  text-black m-4 p-4 rounded-lg shadow-lg flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <img src={src} alt="" className="rounded" />
      <h1 className="text-lg font-bold">{title} </h1>
      <div className="text-sm text-neutral-600">{description}</div>
      <div className="p-2 w-24 bg-neutral-100 shadow-md rounded-lg cursor-pointer ">
        Read More
      </div>
    </div>
  );
}

export default Cards;
