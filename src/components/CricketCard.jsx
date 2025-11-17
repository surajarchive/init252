function CricketCard({ url, name, role }) {
  return (
    <div className="bg-white text-black m-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm border border-gray-200">
      <div className="aspect-square overflow-hidden">
        <img 
          src={url} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h1 className="text-xl font-bold text-gray-900">{name}</h1>
        <p className="text-sm text-gray-600 font-medium">{role}</p>
      </div>
    </div>
  );
}

export default CricketCard;
