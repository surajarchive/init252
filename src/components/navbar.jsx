function Navbar() {
  return (
    <main className="flex justify-between items-center p-2 border-b-2 border-gray-300 bg-transparent backdrop-blur-md">
      <div className=" h-10 w-10 flex justify-center items-center">
        <img
          src="https://www.lpu.in/authenticate/lpu%20logo.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex list-none  gap-4 cursor-pointer font-bold ">
        <li className="hover:scale-105 transition-transform ease-in-out duration-300">
          Home
        </li>
        <li className="hover:scale-105 transition-transform ease-in-out duration-300">
          About
        </li>
        <li className="hover:scale-105 transition-transform ease-in-out duration-300">
          Services
        </li>
      </div>
      <div className="p-2 bg-neutral-100 shadow-md rounded-lg cursor-pointer">
        Download App
      </div>
    </main>
  );
}

export default Navbar;
