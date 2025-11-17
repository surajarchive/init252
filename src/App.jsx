import CardsContainer from "./components/card-container";
import Cricketers from "./components/Cricketers";
import Navbar from "./components/navbar";
import Todo from "./components/todo";

function App() {
  return (
    <main className="">
       <Navbar />
      {/* <CardsContainer />
      <div className="text-2xl text-center">Cricketers</div>
      <Cricketers /> */}

      <Todo />
    </main>
  );
}

export default App;
